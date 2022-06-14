import { Fragment } from "react";

import CatalogSummary from "./CatalogSummary";
import AvailableCatalog from "./AvailableCatalog";

const Catalog = () => {
  return (
    <Fragment>
      <CatalogSummary />
      <AvailableCatalog />
    </Fragment>
  );
};

export default Catalog;
