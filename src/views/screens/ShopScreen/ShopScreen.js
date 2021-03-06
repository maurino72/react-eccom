import React from "react";
import SHOP_DATA from "../../../config/shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection";

class ShopScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionProps }) => {
          return <PreviewCollection key={id} {...collectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopScreen;
