import { Link, LinkProps } from 'react-router-dom';

import { useRouteActive } from './useRouteActive';

export const defaultActiveClassName = 'active';

interface MainLinkProps extends LinkProps {
  activeClassName?: string;
}

const MainLink = ({ children, ...props }: MainLinkProps) => {
  const routeIsActive = useRouteActive(props.to as string);

  let className = props.className;

  if (routeIsActive) {
    className = `${className || ''} ${props.activeClassName || defaultActiveClassName}`.trim();
  }

  return (
    <Link {...props} className={className}>
      {children}
    </Link>
  );
};

export default MainLink;
