# ✈️ Airline Management System (Backend)

Welcome to the backend of the Airline Management System — a robust, scalable solution architected using microservices and designed to power complex airline operations with precision and real-time responsiveness.

---

## 📌 Overview

This system is built using **Node.js**, **Express.js**, **MySQL**, **Sequelize ORM**, and **RabbitMQ**, with a focus on **clean architecture**, **domain-driven design**, and **modular microservices**. Each microservice encapsulates a distinct domain of airline operations.

---

## 🧱 Microservices Architecture

- **🔐 Auth_Service**  
  Handles user authentication and authorization using **JWT**. Manages sign-up, login, and access control.

- **🎫 AirTicketBookingService**  
  Responsible for ticket booking, cancellations, and transaction handling.

- **🛫 FlightsAndSearchService**  
  Manages flight creation, scheduling, and real-time search operations based on source, destination, and date.

- **📣 ReminderService**  
  Sends asynchronous reminders and notifications to users (e.g., flight alerts).

- **🛡️ API_Gateway**  
  Central entry point for all services. Manages request routing, authentication, and service discovery.

---

## ⚙️ Technologies Used

- **Backend Framework:** Node.js, Express.js  
- **Database:** MySQL (via Sequelize ORM & CLI)  
- **Inter-service Messaging:** RabbitMQ  
- **Authentication:** JWT (JSON Web Tokens)  
- **Architecture:** Microservices with Domain-Driven Design (DDD)  
- **Deployment:** AWS (EC2/S3/Elastic Beanstalk/etc.)  
- **Others:** REST APIs, Sequelize Migrations, Structured Logging, API Gateway

---

## 🧠 Key Features

- 🔐 **Secure JWT-based Authentication**  
- 📅 **Flight Scheduling & Management**  
- 🎟️ **Ticket Booking with Status Tracking**  
- 🔍 **Flight Search API**  
- 🔔 **Asynchronous Notifications via RabbitMQ**  
- 📶 **API Gateway for centralized routing**  
- 🛡️ **Error Handling, Logging, and Monitoring**  
- 🔄 **Database Schema Management with Sequelize CLI**  

---

## 🛠️ Installation & Setup

Follow these steps to set up and run the backend services locally.

---

### 📁 1. Clone the Repository

```bash
git clone https://github.com/yourusername/airlineManagementSystem.git
cd airlineManagementSystem

cd Auth_Service
npm install

cd ../FlightsAndSearchService
npm install

cd ../AirTicketBookingService
npm install

cd ../ReminderService
npm install

cd ../API_Gateway
npm install

PORT=3001
MYSQL_USER=root
MYSQL_PASSWORD=yourpassword
MYSQL_DB=airline_db
JWT_SECRET=your_jwt_secret
RABBITMQ_URL=amqp://localhost

---

### 🧬 4. Run Sequelize Migrations

For services that use Sequelize (e.g., `FlightsAndSearchService`, `AirTicketBookingService`, etc.), run the following commands to apply database migrations:

```bash
cd FlightsAndSearchService
npx sequelize-cli db:migrate

cd ../AirTicketBookingService
npx sequelize-cli db:migrate

---

### 🚀 5. Start the Services

Start each microservice individually by navigating into its directory and running:

```bash
cd Auth_Service
npm start

cd ../FlightsAndSearchService
npm start

cd ../AirTicketBookingService
npm start

cd ../ReminderService
npm start

cd ../API_Gateway
npm start

---

### 🌐 6. Access the API Locally

Once all services are running, you can interact with the system using tools like **Postman**, **Thunder Client**, or via direct HTTP requests using cURL.

All incoming requests go through the **API Gateway**, which handles routing, authentication, and delegation to appropriate services.

#### 📌 Sample Endpoints (via API Gateway)

> Replace `localhost:3000` with the actual port configured in your gateway service.

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/v1/flights` | `GET` | Search available flights |
| `/api/v1/flights` | `POST` | Create a new flight (admin only) |
| `/api/v1/bookings` | `POST` | Book a flight |
| `/api/v1/bookings/:id` | `DELETE` | Cancel a booking |
| `/api/v1/users/signup` | `POST` | Register a new user |
| `/api/v1/users/login` | `POST` | Login and get JWT token |

Make sure to include your JWT token in the `Authorization` header for protected routes:


#### ✅ Example cURL Request

```bash
curl -X GET http://localhost:3000/api/v1/flights

---

### 🧪 7. Testing & Debugging Tips

Make sure everything is wired up and working as expected. Below are a few suggestions for debugging and testing:

- ✅ Use **Postman** or **Thunder Client** to test individual endpoints.
- 🐞 Monitor logs for real-time debugging across all services.
- 🐘 Ensure **MySQL** is up and properly connected (check credentials in `.env` files).
- 📬 Confirm **RabbitMQ** is running (default port: `5672`) and accepting messages.
- 🔁 Use **retry queues** or message acknowledgments in RabbitMQ to handle failed deliveries.

For logging, consider integrating libraries like `winston` or `pino` for structured logs.

---

### ⚙️ 8. Optional Setup & Tooling

#### 🧠 Process Management with PM2

To run services in the background and keep them alive after crashes:

```bash
npm install -g pm2

pm2 start npm --name "auth_service" -- start
pm2 start npm --name "booking_service" -- start

pm2 start npm --name "auth_service" -- start
pm2 start npm --name "booking_service" -- start

pm2 list
pm2 logs
