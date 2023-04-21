import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import styles from "./ItemListContainer.css"
import { getFirestore, collection, getDocs } from "firebase/firestore"

// Este componente tiene todos los productos que se ofrecen en el ecommerce

export function ItemListContainer({ category }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsColl = collection(db, 'products');
    getDocs(productsColl).then((querySnapshot) => {
      const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
     if (category === "") {
        setItems(products);
        console.log(products[0]);
      } else {
        const filteredProducts = products.filter((product) => product.categoria === category);
        setItems(filteredProducts);
      }
    });
  }, [category]);

  return (
    <div className={styles.ItemList}>
      <div>
        <h3>{category !== '' ? category : 'Todos nuestros productos:'}</h3>
      </div>
      <div>
        <ItemList items={items} />
      </div>
    </div>
  );
}

