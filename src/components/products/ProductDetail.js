import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = () => ({ categories, product, onSave, onChange }) => {
    return (
        <form onSubmit={onSave}>
            <h3>{product.id ? "Güncelle" : "Ekle"}</h3>
            <TextInput
                name="productName"
                label="Product Name"
                value={product.productName}
                onChange={onChange}
                error="Hata"
            />

            <SelectInput
                name="categoryId"
                label="Category"
                value={product.categoryId || ""}
                defaultOption="Seçiniz"
                options={categories.map(category => ({
                    value: category.id,
                    text: category.category.name
                }))}
                onChange={onChange}
                error="Hata"
            />

            <TextInput
                name="UnitPrice"
                label="Unit Price"
                value={product.UnitPrice}
                onChange={onChange}
                error="Hata"
            />
            <TextInput
                name="quantityPerUnit"
                label="quantity Per Unit"
                value={product.quantityPerUnit}
                onChange={onChange}
                error="Hata"
            />
            <TextInput
                name="unitInStock"
                label="Unit In Stock"
                value={product.unitInStock}
                onChange={onChange}
                error="Hata"
            />
            <button type="submit" className="btn btn-success">
                Save
            </button>
        </form>
    );
};

export default ProductDetail;
