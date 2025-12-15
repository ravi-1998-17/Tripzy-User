import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    setProducts(state, action) {
      state.products = action.payload;
      state.loading = false;
    },
  },
});

export const { setProducts, setLoading } = productSlice.actions;
export default productSlice.reducer;

// products: [
//   // --------------------- DOORS ---------------------
//   {
//     id: 1,
//     name: "1 Door Wooden Wardrobe",
//     category: "doors",
//     price: 5000,
//     quantity: 10,
//     description: "Compact single door wooden wardrobe designed for everyday home storage needs.",
//     ratings: 4.3,
//     images: [
//       "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/HUNOR/WWRB1DHUNORW/WWRB1DHUNORW_LS_1.jpg?tr=w-3840"
//     ]
//   },
//   {
//     id: 2,
//     name: "2 Door Steel Wardrobe",
//     category: "doors",
//     price: 8000,
//     quantity: 5,
//     description: "Durable steel wardrobe with 2 doors providing strong and long-lasting protection.",
//     ratings: 4.1,
//     images: [
//       "https://images.unsplash.com/photo-1570819136111-3a9a2a27df3c?auto=format&fit=crop&w=1200&q=80"
//     ]
//   },
//   {
//     id: 3,
//     name: "Sliding Door Wardrobe",
//     category: "doors",
//     price: 12000,
//     quantity: 3,
//     description: "Modern sliding door wardrobe with smooth mechanism and elegant premium finish.",
//     ratings: 4.6,
//     images: [
//       "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80"
//     ]
//   },

//   // --------------------- TABLES ---------------------
//   {
//     id: 4,
//     name: "Wooden Dining Table",
//     category: "tables",
//     price: 7000,
//     quantity: 8,
//     description: "Premium wooden dining table perfect for family meals and everyday gatherings.",
//     ratings: 4.4,
//     images: [
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
//     ]
//   },
//   {
//     id: 5,
//     name: "Office Study Table",
//     category: "tables",
//     price: 4500,
//     quantity: 12,
//     description: "Compact and sturdy study table suitable for office work and home study setups.",
//     ratings: 3.9,
//     images: [
//       "https://images.unsplash.com/photo-1505692794403-34d4982c1a8d?auto=format&fit=crop&w=1200&q=80"
//     ]
//   },
//   {
//     id: 6,
//     name: "Glass Coffee Table",
//     category: "tables",
//     price: 5500,
//     quantity: 6,
//     description: "Elegant coffee table with tempered glass top offering a clean stylish look.",
//     ratings: 4.7,
//     images: [
//       "https://images.unsplash.com/photo-1567016545453-46c7f4b1e78d?auto=format&fit=crop&w=1200&q=80"
//     ]
//   },

//   // --------------------- CHAIRS ---------------------
//   {
//     id: 7,
//     name: "Modern Office Chair",
//     category: "chairs",
//     price: 3000,
//     quantity: 15,
//     description: "Comfortable ergonomic office chair built for long working hours with proper support.",
//     ratings: 4.2,
//     images: [
//       "https://images.unsplash.com/photo-1582582494381-8c01ba7d6854?auto=format&fit=crop&w=1200&q=80"
//     ]
//   },
//   {
//     id: 8,
//     name: "Wooden Arm Chair",
//     category: "chairs",
//     price: 2500,
//     quantity: 10,
//     description: "Classic wooden arm chair with cushion offering a traditional and relaxing comfort.",
//     ratings: 4.0,
//     images: [
//       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
//     ]
//   },
//   {
//     id: 9,
//     name: "Dining Chair Set",
//     category: "chairs",
//     price: 4500,
//     quantity: 7,
//     description: "Set of 4 stylish dining chairs providing stable seating for daily family use.",
//     ratings: 4.5,
//     images: [
//       "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
//     ]
//   },

//   // --------------------- BEDS ---------------------
//   {
//     id: 10,
//     name: "King Size Wooden Bed",
//     category: "beds",
//     price: 15000,
//     quantity: 4,
//     description: "Spacious king size wooden bed designed for comfort and premium lifestyle experience.",
//     ratings: 4.8,
//     images: [
//       "https://images.unsplash.com/photo-1615874959474-d609e3ddd490?auto=format&fit=crop&w=1200&q=80"
//     ]
//   },
//   {
//     id: 11,
//     name: "Queen Size Storage Bed",
//     category: "beds",
//     price: 13000,
//     quantity: 6,
//     description: "Queen size bed with built-in storage drawers offering practical home organization.",
//     ratings: 4.4,
//     images: [
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118d?auto=format&fit=crop&w=1200&q=80"
//     ]
//   },
//   {
//     id: 12,
//     name: "Single Bed with Headboard",
//     category: "beds",
//     price: 8000,
//     quantity: 10,
//     description: "Comfortable single bed perfect for kids or guests needing simple daily comfort.",
//     ratings: 3.8,
//     images: [
//       "https://images.unsplash.com/photo-1606813902917-b4dd9a7f76d1?auto=format&fit=crop&w=1200&q=80"
//     ]
//   },

//   // --------------------- SOFAS ---------------------
//   {
//     id: 13,
//     name: "3 Seater Fabric Sofa",
//     category: "sofas",
//     price: 12000,
//     quantity: 5,
//     description: "Comfortable 3-seater fabric sofa offering soft cushions and relaxed everyday lounging.",
//     ratings: 4.6,
//     images: [
//       "https://images.unsplash.com/photo-1582015752620-48f17f2b38c4?auto=format&fit=crop&w=1200&q=80"
//     ]
//   },
//   {
//     id: 14,
//     name: "L-Shaped Corner Sofa",
//     category: "sofas",
//     price: 20000,
//     quantity: 3,
//     description: "Stylish L-shaped corner sofa ideal for living rooms with modern spacious layouts.",
//     ratings: 4.9,
//     images: [
//       "https://images.unsplash.com/photo-1598300051243-e8e5c34324cf?auto=format&fit=crop&w=1200&q=80"
//     ]
//   },
//   {
//     id: 15,
//     name: "Recliner Sofa Chair",
//     category: "sofas",
//     price: 9000,
//     quantity: 7,
//     description: "Soft recliner sofa chair designed for relaxing comfort during long seated hours.",
//     ratings: 4.3,
//     images: [
//       "https://images.unsplash.com/photo-1582233477322-d1d6e2291a02?auto=format&fit=crop&w=1200&q=80"
//     ]
//   }
// ],