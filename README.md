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

This project includes Docker configuration for containerized deployment.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (optional, for easier deployment)

### Building and Running with Docker

To build and run the application using Docker:

```bash
# Build the Docker image
docker build -t zdorovaya-lapka .

# Run the container
docker run -p 3000:3000 zdorovaya-lapka
```

### Using Docker Compose

For a simpler deployment, you can use Docker Compose:

```bash
# Build and start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
