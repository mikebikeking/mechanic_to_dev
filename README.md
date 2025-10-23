# Michael King - Portfolio Website

A modern, high-performance portfolio website built with React, TypeScript, and TailwindCSS. This project showcases precision engineering principles applied to frontend development.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, TailwindCSS
- **Performance Optimized**: Lazy loading, code splitting, image optimization
- **Responsive Design**: Mobile-first approach with smooth animations
- **Accessibility**: WCAG AA compliant with proper semantic HTML
- **Error Handling**: Comprehensive error boundaries and error handling
- **State Management**: Context API with reducer pattern
- **Testing**: Unit tests with Vitest, E2E tests with Playwright
- **CI/CD**: GitHub Actions for automated testing and deployment

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Development Tools
- **ESLint** - Code linting and formatting
- **Vitest** - Unit testing framework
- **Playwright** - End-to-end testing
- **GitHub Actions** - CI/CD pipeline

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mikebikeking/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (Optional)
   ```bash
   cp env.example .env
   ```
   
   Update the following variables in `.env`:
   ```env
   VITE_GITHUB_TOKEN=your_github_token  # Optional - for GitHub stats
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🧪 Testing

### Unit Tests
```bash
# Run unit tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### End-to-End Tests
```bash
# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui
```

## 🏗️ Build & Deployment

### Development Build
```bash
npm run dev
```

### Production Build
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
├── components/          # React components
│   ├── __tests__/     # Component tests
│   ├── LazyComponents.tsx
│   ├── ErrorBoundary.tsx
│   ├── OptimizedImage.tsx
│   └── ...
├── context/            # React Context providers
│   └── AppContext.tsx
├── hooks/              # Custom React hooks
│   ├── useErrorHandler.ts
│   └── useGithubStats.ts
├── services/           # API services
│   └── github.service.ts
├── test/               # Test utilities
│   ├── setup.ts
│   └── e2e/
├── types/              # TypeScript type definitions
│   └── assets.d.ts
└── assets/             # Static assets
```

## 🎯 Performance Optimizations

### Code Splitting
- Lazy loading of heavy components
- Dynamic imports for better bundle splitting
- Intersection Observer for viewport-based loading

### Image Optimization
- WebP format support
- Lazy loading with blur placeholders
- Responsive image sizing
- Vite image optimizer integration

### Bundle Optimization
- Manual chunk splitting for vendor libraries
- Tree shaking for unused code elimination
- Gzip compression for production builds

## 🔧 Architecture Decisions

### State Management
- **Context API with useReducer**: Chosen for simplicity and performance
- **No external state library**: Redux/Zustand not needed for this scale
- **Local state**: Component-level state for UI interactions

### Error Handling
- **Error Boundaries**: Catch and handle component errors gracefully
- **Custom error hook**: Centralized error handling logic
- **Fallback UI**: User-friendly error messages

### Performance Strategy
- **Lazy Loading**: Components load only when needed
- **Code Splitting**: Separate bundles for different features
- **Image Optimization**: Multiple formats and sizes
- **Caching**: GitHub API response caching

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider

## 📊 Performance Metrics

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 95+

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- **Email**: Mike@mikeking.dev
- **LinkedIn**: [michael-king-804b6037](https://linkedin.com/in/michael-king-804b6037)
- **GitHub**: [mikebikeking](https://github.com/mikebikeking)

---

**Built with precision and attention to detail** 🚴‍♂️ → 💻
