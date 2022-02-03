// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Shopping {
    uint256 productCount = 0;
    uint256 ordersCount = 0;
    address owner;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    struct Products {
        uint256 id;
        string name;
        uint256 price;
        uint256 qty;
    }

    struct Order {
        uint256 id;
        uint256[] products;
        uint256 total;
        address user;
    }

    mapping(string => Products) public products;
    mapping(address => Products[]) public cart;
    mapping(uint256 => Order) public orders;

    function addProduct(
        string memory _productCode,
        string memory _name,
        uint256 _price,
        uint256 _qty
    ) public onlyOwner {
        products[_productCode] = Products(productCount, _name, _price, _qty);
    }

    function deleteProduct(string memory _productCode) public onlyOwner {
        delete products[_productCode];
    }

    function addToCart(string memory _productCode) public {
        Products storage product = products[_productCode];
        require(products[_productCode].qty <= 0, "Product stock over");
        cart[msg.sender].push(product);
    }

    function placeOrder() public {
        Products[] memory productList = cart[msg.sender];
        uint256 total = 0;
        uint256[] memory productIds;

        for (uint256 i = 0; i < productList.length; i++) {
            total += productList[i].price;
            productList[i].qty--;
            productIds[i] = productList[i].id;
        }

        ordersCount++;
        orders[ordersCount] = Order(ordersCount, productIds, total, msg.sender);
    }
}
