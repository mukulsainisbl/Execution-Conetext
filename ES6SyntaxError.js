const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    let price = parseFloat(item.price);

    // Check if price is a valid number
    if (isNaN(price) || typeof price !== 'number') {
      console.error(" Invalid price.");
      return;
    }

    // Round price to 2 decimal places
    price = Number(price.toFixed(2));

    this.items.push({ ...item, price });
    this.total += price;

    console.log(`✅ Added "${item.name}" - $${price}`);
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`;
  }
};

checkout.addItem({ name: "Coffee Maker", price: "99.95" })

