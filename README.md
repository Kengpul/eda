# Edamama Technical Test

## Run

Install dependencies by running:
```
npm install
```

Create a new file named `.env`  with the following environment variables in the root of the project folder. And put your own local configuration:
```
MONGO_URI=
PORT=
```

Add products and create cart by running:
```
node seeds/
node seeds/cart.js
```
Note: 
- All image url are random, so every time you refresh or request to the server, different image are rendered
- Products and prices are random generated every time you run `node seeds/` command


Finally run the server:
```bash
node index.js
```

Visit [http://localhost:3000](http://localhost:3000) or your custom port environment variable to view the app.

## Screenshots

All Products
![AllProducts](https://res.cloudinary.com/dsjrdrewd/image/upload/v1650962701/edamama/allProducts_opjbzs.png)

Show Product
![showProduct](https://res.cloudinary.com/dsjrdrewd/image/upload/v1650962701/edamama/showProduct_zbv0j2.png)

Cart
![cartEmpty](https://res.cloudinary.com/dsjrdrewd/image/upload/v1650962699/edamama/cart0_wg346n.png)
![cart](https://res.cloudinary.com/dsjrdrewd/image/upload/v1650962699/edamama/cart1_udinai.png)

Search
![searchEmpty](https://res.cloudinary.com/dsjrdrewd/image/upload/v1650962699/edamama/search0_tjecsw.png)
![search](https://res.cloudinary.com/dsjrdrewd/image/upload/v1650962699/edamama/search1_xg8yfs.png)