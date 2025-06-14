This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Services Data from XLSX

This project supports loading services data from an XLSX file. The services are displayed on the main page and are automatically loaded from `/public/data/services.xlsx` if the file exists. If the file doesn't exist, the application falls back to using hardcoded data.

### Generating the XLSX File

To generate the XLSX file with sample services data, run:

```bash
npm install  # Install dependencies first
npm run generate-xlsx
```

This will create a file at `/public/data/services.xlsx` with sample services data. You can then edit this file to add, remove, or modify services.

### XLSX File Format

The XLSX file should have the following columns:
- `name`: The name of the service
- `description`: A description of the service
- `price`: The price of the service

### Updating Services

After modifying the XLSX file, restart the development server to see the changes:

```bash
npm run dev
```

## Payment Integration with YooKassa

This project includes integration with the YooKassa payment system. Users can click on the "Оплатить" button for any service to initiate a payment process.

### Configuration

To enable payments, you need to set up YooKassa API credentials in your environment variables:

1. Create a `.env.local` file in the root directory with the following variables:
   ```
   YOOKASSA_SHOP_ID=<Your YooKassa shop ID>
   YOOKASSA_SECRET_KEY=<Your YooKassa secret key>
   NEXT_PUBLIC_SITE_URL=<Your site URL for return after payment>
   ```

2. Replace the placeholder values with your actual YooKassa credentials:
   - `YOOKASSA_SHOP_ID`: Your shop identifier from YooKassa dashboard
   - `YOOKASSA_SECRET_KEY`: Your secret API key from YooKassa dashboard
   - `NEXT_PUBLIC_SITE_URL`: The URL where users will be redirected after payment

### Payment Flow

1. User clicks the "Оплатить" button on a service card
2. The application sends a request to the YooKassa API to create a payment
3. User is redirected to the YooKassa payment page
4. After completing the payment, user is redirected back to the success page on your site

### Testing Payments

For testing purposes, YooKassa provides a sandbox environment. Make sure to use sandbox credentials during development.

## Code Quality and Formatting

This project uses [Biome](https://biomejs.dev/) for code formatting and linting. Biome is a fast, modern toolchain for web projects that aims to provide functionality similar to Prettier and ESLint but with improved performance and developer experience.

### Available Scripts

- `npm run format` - Format all files with Biome
- `npm run format:check` - Check formatting without making changes
- `npm run lint:biome` - Run Biome linter
- `npm run check` - Run both formatting and linting checks and apply fixes

### VSCode Integration

If you're using VSCode, the project includes settings to automatically format code on save using Biome. Make sure to install the [Biome VSCode extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) for the best experience.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Docker Setup

This project includes Docker configuration for containerized deployment with Nginx as a reverse proxy and Certbot for SSL certificate management.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- A domain name pointing to your server

### Environment Variables

This project requires several environment variables to be set for the YooKassa payment integration. These variables are passed to the Docker containers through the docker-compose.yml file.

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file with your actual values:
   ```
   YOOKASSA_SHOP_ID=your_shop_id
   YOOKASSA_SECRET_KEY=your_secret_key
   NEXT_PUBLIC_YOOKASSA_IDEMPOTENCE_KEY_PREFIX=zdorovaya-lapka
   NEXT_PUBLIC_SITE_URL=https://your-domain.com/payment/success
   ```

The docker-compose.yml file is configured to read these environment variables from the `.env` file and pass them to the NextJS container.

### SSL Configuration with Certbot

This project uses Certbot for automatic SSL certificate management. Before starting the application for the first time, you need to initialize the SSL certificates:

1. Edit the `init-letsencrypt.sh` script:
   - Update the `domains` array with your domain names
   - Add your email address to the `email` variable (recommended for renewal notifications)
   - Set `staging=1` for testing (to avoid rate limits) or `staging=0` for production

2. Run the initialization script:
   ```bash
   ./init-letsencrypt.sh
   ```

3. Start the application:
   ```bash
   docker-compose up -d
   ```

Certificates are automatically renewed by the Certbot container. No manual intervention is required for certificate renewal.

### Building and Running with Docker Compose

For deployment with SSL:

```bash
# Initialize SSL certificates (first time only)
./init-letsencrypt.sh

# Build and start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

The application will be available at your domain via HTTPS.

### Troubleshooting SSL

If you encounter issues with SSL certificates:

1. Check the Certbot logs:
   ```bash
   docker-compose logs certbot
   ```

2. Check the Nginx logs:
   ```bash
   docker-compose logs nginx
   ```

3. Verify that your domain is properly pointing to your server's IP address

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
