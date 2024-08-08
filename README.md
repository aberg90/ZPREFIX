# Inventorysystem
# ZPREFIX

PROCESS ON SPINNING UP THE DOCKER COMPOSE CONTAINERS:

Step 1: Open a terminal
Step 2: In the root of the project type COMMAND: docker compose up --build OR docker compose up

PROCESS ON BRINGING DOWN THE DOCKER COMPOSE CONTAINERS:

Step 1: PRESS "CTRL" then while holding CTRL, PRESS "c"
Step 2: In the root of the project type COMMAND: docker compose down

IMPORTANT!!!
WHEN SPINNING UP THE APPLICATION, YOU MAY NOT BE ABLE TO AUTOMATICALLY SEE CHANGING TO THE CLIENT WHEN ITEMS ARE BEING UPDATED OR DELETED FROM THE SERVER/DATABASE. THIS I LIKELY DO TO THE Dockerfile AND docker-compose.yaml FILE HAVING THE WRONG WORKING DIRECTORY AND TARGET. TO FIX THIS, I CREATED A CLIENT_DIR PATH IN THE .env FILE LOCATED IN MY ROOT DIRECTORY. WHOEVER SPINS THIS APPLICATION UP WILL NEED TO KNOW WHERE THEIR WORKING DIRECTORY AND TARGET DIRECTORY IS FOR THE CLIENT AND CHANGE IT IN THE .env FILE.

IN MY CASE, MY DESKTOP COMPUTER IS /src AND MY LAPTOP IS /app. YOURS MAY BE DIFFERENT BUT START WITH ONE OF THOSE TWO, SO FIGURE OUT WHAT IT IS AND CHANGE THE CLIENT_DIR TO THAT. ONCE DONE, DOCKER COMPOSE DOWN AND BACK UP.

---------------------------------------------------------------------API Documentation-----------------------------------------------------------

This section will explain how to navigate the API through the browser and through POSTMAN for CRUD requests.

Navigating API browser:

baseUrl is: http://localhost:8080/items
Entering the above URL in your browser should give a result similar to below:

[
  {
    "id": 1,
    "User_id": 1,
    "item_name": "nail",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    "quantity": 10,
    "material": "steel",
    "size": "small"
  },
  {
    "id": 2,
    "User_id": 1,
    "item_name": "bolt",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    "quantity": 5,
    "material": "iron",
    "size": "medium"
  },
  {
    "id": 3,
    "User_id": 2,
    "item_name": "screw",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    "quantity": 40,
    "material": "titanium",
    "size": "large"
  },
  {
    "id": 6,
    "User_id": 1,
    "item_name": "washer",
    "description": "Used to make bolts more secure",
    "quantity": 8,
    "material": null,
    "size": null
  }
]

This will show all current inventory items in the database. You can filter down by item name and ID. However, it recommonded to filter by name. This is how the database works. It auto increments the item id for data integrity. This is why you see fourth item id as 6. This is because I deleted and added the same item twice. I created a GET request that can pull an item by its item_name instead of id. Here is how you can see that in the browser:

Pulling items by name: http://localhost:8080/items/name/washer
using the above URL should give you something similar to this:

{
  "id": 6,
  "User_id": 1,
  "item_name": "washer",
  "description": "Used to make bolts more secure",
  "quantity": 8,
  "material": steel,
  "size": small
}

/*---------------------------------------------------Making requests through POSTMAN----------------------------------------------------*/

GET all users: http://localhost:8080/users

POST register users: http://localhost:8080/users/register

ensure in the body, you select RAW and JSON

example request:
{
  "username": "testUser2",
  "password": "unsecurePassword1234"
}

POST login users: http://localhost:8080/users/login

ensure in the body, you select RAW and JSON

example request:
{
  "username": "testUser2",
  "password": "unsecurePassword1234"
}


GET all items: http://localhost:8080/items

GET items by name: http://localhost:8080/items/name/nail

POST items: http://localhost:8080/items

ensure in the body, you select RAW and JSON

example request:
{
  "User_id": 1,
  "item_name": "washer",
  "description": "Used to make bolts more secure",
  "quantity": 8,
  "material": "steel",
  "size": "small"
}


PATCH items by ID: http://localhost:8080/items/3

You need to be sure you have the right item id, check the JSON data to see what item ID it is.

ensure in the body, you select RAW and JSON

example request:
{
        "id": 3,
        "User_id": 2,
        "item_name": "screw",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        "quantity": 100,
        "material": "titanium",
        "size": "large"
    }

DELETE item by ID: http://localhost:8080/items/7

You need to be sure you have the right item id, check the JSON data to see what item ID it is.
