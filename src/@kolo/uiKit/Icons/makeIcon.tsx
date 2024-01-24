import type {IconComponent, IconProps} from './types/icon';

export const makeIcon = (
  Icon: IconComponent,
  {viewBox: defaultViewBox, width: defaultWidth, height: defaultHeight, className: defaultClassName}: IconProps = {}
): IconComponent => {
  const IconWrapper: IconComponent = ({className, height, viewBox, width}: IconProps) => {
    const props: IconProps = {
      className: className ?? defaultClassName,
      height: height ?? defaultHeight,
      viewBox: viewBox ?? defaultViewBox,
      width: width ?? defaultWidth,
    };

    return <Icon {...props} />;
  };

  return IconWrapper;
};
