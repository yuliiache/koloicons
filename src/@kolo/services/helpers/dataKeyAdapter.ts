type dataAsObject = Record<string, unknown>;

export const dataKeyAdapter = (data: unknown): unknown => {
  if (Array.isArray(data)) {
    return data.map((item) => dataKeyAdapter(item));
  }

  if (typeof data === 'object' && data !== null) {
    const adaptedData: {[key: string]: unknown} = {};

    Object.keys(data).forEach((key) => {
      if (key.startsWith('_')) {
        const adaptedKey = key.slice(1);
        adaptedData[adaptedKey] = dataKeyAdapter((data as dataAsObject)[key]);
      } else {
        adaptedData[key] = dataKeyAdapter((data as dataAsObject)[key]);
      }
    });

    return adaptedData;
  }

  return data;
};
