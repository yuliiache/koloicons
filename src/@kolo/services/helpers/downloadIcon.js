import {toast} from 'react-toastify';
import {DEFAULT_ICON_COLOR} from '@kolo/constants/constants';
import {getIconFile} from '@kolo/facade/getIconFile/getIconFile';
import {getIconsFiles} from '@kolo/facade/getIconFile/getIconsFiles';
import {getIconsFilesByCategory} from '@kolo/facade/getIconFile/getIconsFilesByCategory';
import {logger} from '@kolo/services/logger/logger';
import downloadjs from 'downloadjs';

import {LOADING_STOP_DELAY} from './constants';

const downloadSingleFile = (res, {iconName, format = 'png'}) => {
  const fileName = `${iconName}.${format}`;
  const contentType = format === 'png' ? 'image/png' : 'text/plain';
  downloadjs(res.data, fileName, contentType);
};

const downloadFiles = (res) => {
  console.log(res);
  return downloadjs(res.data, 'koloicons.zip', 'application/zip');
};

const showError = (error) => {
  toast.error('Something went wrong during downloading the icon.', {
    autoClose: 4000,
  });
  logger('Something went wrong during downloading the icon.', error);
};

export const downloadIcon = (data, loadingStop) => {
  const {iconId, color} = data;
  if (data.color === DEFAULT_ICON_COLOR) {
    delete data.color;
  } else {
    data.color = color && color.slice(1);
  }

  if (iconId) {
    return getIconFile(data)
      .then((res) => downloadSingleFile(res, data))
      .catch((error) => showError(error))
      .finally(setTimeout(loadingStop, LOADING_STOP_DELAY));
  }

  return getIconsFiles(data)
    .then((res) => downloadFiles(res))
    .catch((error) => showError(error))
    .finally(setTimeout(loadingStop, LOADING_STOP_DELAY));
};

export const downloadIconsAndHideCollection = (data, showHideCollectionPanel, loadingStop) =>
  getIconsFiles(data)
    .then((res) => {
      return downloadFiles(res);
    })
    .then(() => showHideCollectionPanel(false))
    .catch((error) => showError(error))
    .finally(setTimeout(loadingStop, LOADING_STOP_DELAY));

export const downloadIconsFilesByCategory = (data, loadingStop) =>
  getIconsFilesByCategory(data)
    .then((res) => downloadFiles(res))
    .catch((error) => showError(error))
    .finally(setTimeout(loadingStop, LOADING_STOP_DELAY));
