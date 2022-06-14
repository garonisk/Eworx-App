import classes from "./AvailableCatalog.module.css";
import Card from "../UI/Card";
import CatalogItem from "./CatalogItem/CatalogItem";

const DUMMY_COFFEES = [
  {
    id: "m1",
    name: "La Esperanza 1kg",
    description: "Vanilla, Milk Chocolate, Dry Fig , Honey",
    price: 23.0,
  },
  {
    id: "m2",
    name: "Jabal Nabi 1kg",
    description: "Plum, Maple Syrup Chocolate, Dry Fig , Honey!",
    price: 20.0,
  },
  {
    id: "m3",
    name: "Ethiopia Moplaco 1kg",
    description:
      "Bensa Kokosa has bright acidity with a complex flavor and mild body. Flowery flavor characteristics like Jasmin, mandarine, orange plum and fig",
    price: 15.0,
  },
  {
    id: "m4",
    name: "Panama Volcan Coffee Corp 1kg",
    description: "Geisha Natural...",
    price: 12.0,
  },
];

const AvailableCatalog = () => {
  const catalogList = DUMMY_COFFEES.map((catalog) => (
    <CatalogItem
      id={catalog.id}
      key={catalog.id}
      name={catalog.name}
      description={catalog.description}
      price={catalog.price}
    />
  ));

  return (
    <section className={classes.catalog}>
      <Card>
        <ul>{catalogList}</ul>
      </Card>
    </section>
  );
};

export default AvailableCatalog;
