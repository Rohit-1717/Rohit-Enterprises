import React from "react";
import { Search, ShoppingCart, User, Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 md:hidden" />
            <a href="/" className="text-2xl font-bold">
              DoorsPly
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-xl mx-4">
            <Input
              type="search"
              placeholder="Search for doors, plywood..."
              className="w-full"
            />
            <Button variant="secondary" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/cart">
              <ShoppingCart className="h-6 w-6" />
            </a>
            <a href="/account">
              <User className="h-6 w-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto my-8 px-4">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=1200"
              alt="Featured products"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">
                  Premium Doors & Plywood
                </h2>
                <p className="text-xl mb-6">
                  Elevate your space with our quality products
                </p>
                <Button size="lg" asChild>
                  <a href="/products">Shop Now</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Wooden Doors", "Glass Doors", "Plywood Sheets", "Veneers"].map(
              (category) => (
                <a
                  href={`/products?category=${category
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  key={category}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/placeholder.svg?height=150&width=200"
                        alt={category}
                        className="w-full h-[150px] object-cover rounded"
                      />
                    </CardContent>
                  </Card>
                </a>
              )
            )}
          </div>
        </section>

        {/* Featured Products */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { id: 1, name: "Mahogany Door", price: "$299.99" },
              { id: 2, name: "Birch Plywood", price: "$49.99" },
              { id: 3, name: "French Glass Door", price: "$399.99" },
              { id: 4, name: "Teak Veneer", price: "$79.99" },
            ].map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt={product.name}
                    className="w-full h-[200px] object-cover rounded mb-4"
                  />
                  <p className="font-semibold text-lg">{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <a href={`/products/${product.id}`}>View Details</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Special Offer */}
        <section className="mt-12">
          <Card className="bg-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">
                Special Offer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                Get 20% off on all plywood sheets this week!
              </p>
              <Button asChild>
                <a href="/products?category=plywood-sheets">
                  Shop Plywood <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/shipping">Shipping & Returns</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about">Our Story</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/testimonials">Testimonials</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 DoorsPly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
