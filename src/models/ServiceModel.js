class ServiceModel {
  constructor(id, title, imageUrl, subCategory) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.subCategory = subCategory;
  }
}

class SubCategory {
  constructor(id, title, imageUrl, description, ratings, price, serviceTime) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.ratings = ratings;
    this.price = price;
    this.serviceTime = serviceTime;
  }
}

class CategoryDescription {
  constructor(type, explanation) {
    this.type = type;
    this.explanation = explanation;
  }
}

export {ServiceModel, SubCategory, CategoryDescription};
