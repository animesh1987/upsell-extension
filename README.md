# BigCommerce Upsell Extension

A React-based BigCommerce checkout extension that displays recommended products to customers during the checkout process, helping increase average order value through strategic upselling.

## 🚀 Features

- **Smart Product Recommendations**: Displays relevant upsell products during checkout
- **Seamless Integration**: Built specifically for BigCommerce checkout extensions
- **Real-time Cart Updates**: Adds products directly to the cart without page refresh
- **Loading States**: Smooth user experience with loading indicators and skeleton screens
- **Responsive Design**: Modern UI built with Tailwind CSS
- **TypeScript Support**: Full type safety and better developer experience

## 🛠 Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4.x
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Platform**: BigCommerce Checkout Extensions

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- BigCommerce store with checkout extension capabilities
- Access to BigCommerce Developer Tools

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd upsell-extension
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and configure your environment variables:
   ```env
   # Add your environment variables here
   VITE_API_BASE_URL=your-api-base-url
   ```

## 🚀 Development

### Running the Development Server

```bash
npm run dev
```

This will start the Vite development server. The extension will be available for testing in your BigCommerce checkout environment.

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ProductItem.tsx   # Individual product display
│   ├── Products.tsx      # Product list container
│   ├── ProductLoadingSkeleton.tsx  # Loading state
│   └── index.ts         # Component exports
├── context/             # React context providers
│   └── ExtensionContext.tsx  # BigCommerce extension context
├── service/             # API and business logic
│   ├── api/            # API calls
│   │   ├── getProduct.ts    # Fetch product data
│   │   └── updateCart.ts    # Add products to cart
│   ├── application/    # Application services
│   │   └── ExtensionService.ts  # BigCommerce extension service
│   └── index.ts        # Service exports
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🔌 BigCommerce Integration

This extension integrates with BigCommerce's checkout extension framework:

1. **Extension Service**: Handles communication with the BigCommerce checkout
2. **Cart Management**: Adds products to the existing cart
3. **Loading Indicators**: Shows loading states during cart updates
4. **Checkout Reload**: Refreshes checkout data after cart modifications

### Key Integration Points

- **Extension Initialization**: Automatically connects to BigCommerce checkout
- **Cart ID Management**: Retrieves and uses the current cart ID
- **Product Addition**: Seamlessly adds upsell products to the cart
- **UI Feedback**: Provides immediate feedback on user actions

## 🎨 Customization

### Styling

The extension uses Tailwind CSS for styling. You can customize the appearance by:

1. Modifying the Tailwind configuration in `tailwind.config.cjs`
2. Updating component styles in the respective `.tsx` files
3. Adding custom CSS in `src/index.css`

### Product Data

Product recommendations are fetched from a Cloudflare Worker endpoint. To customize:

1. Update the API endpoint in `src/service/api/getProduct.ts`
2. Modify the product interface in `src/components/ProductItem.tsx`
3. Adjust the product display logic as needed

## 🚀 Deployment

### BigCommerce Extension Deployment

1. **Build the extension**
   ```bash
   npm run build
   ```

2. **Upload to BigCommerce**
   - Package the `dist` folder contents
   - Upload through BigCommerce Developer Tools
   - Configure extension settings in your store

3. **Test in Checkout**
   - Enable the extension in your store settings
   - Test the checkout flow with the upsell functionality

## 🧪 Testing

The extension should be tested in the BigCommerce checkout environment:

1. **Local Testing**: Use the development server with BigCommerce's extension testing tools
2. **Staging**: Deploy to a staging environment for comprehensive testing
3. **Production**: Thoroughly test before enabling in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

For support and questions:

1. Check the BigCommerce Extension documentation
2. Review the codebase and comments
3. Create an issue in this repository

## 🔄 Version History

- **v1.0.0**: Initial release with basic upsell functionality
