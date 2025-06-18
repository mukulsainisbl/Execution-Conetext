const userProfile = {
  name: "Alice",
  age: 28,

  details() {
    return `${this.name} is ${this.age} years old.`;
  },

  updateAge(newAge) {
    if (typeof newAge !== "number" || newAge <= 0) {
      console.error("Invalid age.");
      return;
    }

    this.age = newAge;
    console.log(`✅ Age updated. ${this.details()}`);
  }
};

// Test
userProfile.updateAge("ff");
console.log(userProfile.details());  // Output: Alice is 30 years old.
