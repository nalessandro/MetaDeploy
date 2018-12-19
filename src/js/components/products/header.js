// @flow

import * as React from 'react';
import PageHeader from '@salesforce/design-system-react/components/page-header';
import ProductIcon from 'components/products/icon';

import type {
  Product as ProductType,
  Version as VersionType,
} from 'products/reducer';

const Header = ({
  product,
  version,
}: {
  product: ProductType,
  version: VersionType,
}): React.Node => (
  <PageHeader
    className="page-header
      slds-p-around_x-large"
    title={product.title}
    info={version.label}
    icon={<ProductIcon item={product} />}
  />
);

export default Header;