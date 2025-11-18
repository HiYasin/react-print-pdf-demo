# React PDF Invoice Generator

Invoice PDF generation from given data.

## 📚 Libraries & Packages

### Core
- **[Next.js](https://nextjs.org/)** `v16.0.3`  
  React framework with server-side rendering and static site generation capabilities.

- **[React](https://react.dev/)** `v19.2.0`  
  JavaScript library for building user interfaces.

- **[Tailwind CSS](https://tailwindcss.com/)** `v4`  
  Utility-first CSS framework for rapid UI development.

### PDF Generation
- **[@react-pdf/renderer](https://react-pdf.org/)** `v4.3.1`  
  React renderer for creating PDF files on the browser and server.  
  📖 [Documentation](https://react-pdf.org/) | [GitHub](https://github.com/diegomura/react-pdf)

- **[@ag-media/react-pdf-table](https://www.npmjs.com/package/@ag-media/react-pdf-table)** `v2.0.3`  
  Table component for @react-pdf/renderer with support for custom styling and column widths.  
  📖 [NPM Package](https://www.npmjs.com/package/@ag-media/react-pdf-table) | [GitHub](https://github.com/ag-media/react-pdf-table)

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Lint
```bash
npm run lint
```

## 📄 Key Features

- Generate professional PDF invoices with custom styling
- Display company logo and branding
- Customizable table layouts with controlled column widths
- Client-side PDF download functionality
- Real-time PDF preview (optional)
- Responsive design with Tailwind CSS

## 🔧 Configuration

The invoice template uses:
- **Data configuration**: `components/invoice/data.ts`
- **Styling**: `components/invoice/style.ts`
- **Main component**: `components/invoice/invoice.tsx`
- **Logo**: `components/invoice/logo.png`
