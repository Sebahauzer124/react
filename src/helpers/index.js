import { db, getCategories, getProducts } from "../services";

import { collection, addDoc } from "firebase/firestore";

/**
 *
 * @param {*} collectionName nombre de la colección
 */

export async function createProductsFirestore(collectionName) {
  try {
    const response = await getCategories();

    console.log("Response completa:", response);

    // Asegurarte que response y data existen
    if (!response || !response.data) {
      throw new Error("La respuesta de la API está vacía o mal formada.");
    }

    // Ajustá según la estructura real
    const fetchedProducts = Array.isArray(response.data)
      ? response.data
      : response.data.products; // o el campo correcto

    if (!Array.isArray(fetchedProducts)) {
      throw new Error("La respuesta de la API no es un array.");
    }

    const productsCollection = collection(db, collectionName);

    const addPromises = fetchedProducts.map((product) => {
      const { id, ...rest } = product; // Remover id directamente
      return addDoc(productsCollection, {
        ...rest,
        createdAt: new Date(),
      });
    });

    await Promise.all(addPromises);

    console.log(`${fetchedProducts.length} productos añadidos a Firestore.`);
  } catch (err) {
    console.error("Error al obtener o almacenar productos:", err);
  }
}
