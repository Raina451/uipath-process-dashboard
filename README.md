# UiPath Process Dashboard

A modern, responsive dashboard for viewing and managing UiPath Orchestrator processes. Built with React, TypeScript, and Cloudflare Workers for enterprise-grade performance and reliability.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Raina451/uipath-process-dashboard)

## Features

- **Real-time Process Monitoring** - View all UiPath Orchestrator processes with live status updates
- **Process Management** - Start processes directly from the dashboard with one-click execution
- **Modern UI/UX** - Beautiful, responsive interface built with shadcn/ui components
- **Enterprise Ready** - Powered by Cloudflare Workers for global edge deployment
- **Type Safety** - Full TypeScript support with UiPath SDK integration
- **Dark/Light Mode** - Automatic theme switching with user preference persistence

## Technology Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Full type safety and developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - High-quality, accessible UI components
- **React Query** - Powerful data synchronization and caching
- **React Router** - Client-side routing and navigation
- **Lucide React** - Beautiful, customizable icons

### Backend
- **Cloudflare Workers** - Serverless edge computing platform
- **Hono** - Fast, lightweight web framework
- **Durable Objects** - Consistent, low-latency storage
- **UiPath TypeScript SDK** - Official UiPath Orchestrator integration

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and quality enforcement
- **Bun** - Fast JavaScript runtime and package manager

## Prerequisites

- [Bun](https://bun.sh/) (latest version)
- [Cloudflare account](https://dash.cloudflare.com/sign-up) (for deployment)
- UiPath Orchestrator access with API credentials

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd uipath-process-dashb-pcnfmyms80p9udf35_my5
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Configure UiPath credentials**
   
   Update the UiPath configuration in `src/lib/uipath.ts`:
   ```typescript
   export const uipath = new UiPath({
       baseUrl: 'https://your-orchestrator-url.com/',
       orgName: 'your-organization',
       tenantName: 'your-tenant',
       secret: 'your-api-secret'
   });
   ```

4. **Start development server**
   ```bash
   bun run dev
   ```

   The application will be available at `http://localhost:3000`

## Development

### Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint code analysis
- `bun run deploy` - Deploy to Cloudflare Workers

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── uipath/         # UiPath-specific components
│   └── layout/         # Layout components
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries and configurations
├── pages/              # Application pages/routes
└── main.tsx           # Application entry point

worker/                 # Cloudflare Workers backend
├── index.ts           # Worker entry point
├── userRoutes.ts      # API route definitions
└── durableObject.ts   # Durable Object implementation

shared/                 # Shared types and utilities
└── types.ts           # TypeScript type definitions
```

### Adding New Features

1. **UiPath Integration**: Use the provided hooks in `src/hooks/useUiPathProcesses.ts` for UiPath API interactions
2. **UI Components**: Leverage shadcn/ui components from `src/components/ui/`
3. **State Management**: Use React Query for server state and React hooks for local state
4. **Styling**: Use Tailwind CSS classes with the configured design system

## Usage

### Viewing Processes

The dashboard automatically loads and displays all available UiPath processes from your configured Orchestrator instance. Processes are shown as cards with:

- Process name and description
- Process key for identification
- Last execution status and timestamp
- Start process button for manual execution

### Starting Processes

Click the "Start Process" button on any process card to execute it immediately. The dashboard will:

- Send the start command to UiPath Orchestrator
- Show loading state during execution
- Display success/error notifications
- Refresh the process list automatically

### Real-time Updates

The dashboard automatically refreshes process data every 30 seconds to ensure you have the latest information. You can also manually refresh using the refresh button in the header.

## Deployment

### Cloudflare Workers Deployment

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Raina451/uipath-process-dashboard)

#### Manual Deployment

1. **Install Wrangler CLI**
   ```bash
   bun add -g wrangler
   ```

2. **Authenticate with Cloudflare**
   ```bash
   wrangler login
   ```

3. **Deploy to Cloudflare Workers**
   ```bash
   bun run deploy
   ```

4. **Configure Environment Variables**
   
   Set up your UiPath credentials in the Cloudflare dashboard or via Wrangler:
   ```bash
   wrangler secret put UIPATH_BASE_URL
   wrangler secret put UIPATH_ORG_NAME
   wrangler secret put UIPATH_TENANT_NAME
   wrangler secret put UIPATH_SECRET
   ```

### Environment Configuration

The application supports different environments through configuration:

- **Development**: Local development with hot reload
- **Preview**: Production build running locally
- **Production**: Deployed to Cloudflare Workers edge network

## API Reference

### UiPath Integration

The application uses the official UiPath TypeScript SDK with the following key endpoints:

- `GET /api/processes` - Fetch all processes
- `POST /api/processes/start` - Start a specific process
- `GET /api/processes/:id` - Get process details

### Custom Hooks

- `useUiPathProcesses(folderId?)` - Fetch and manage process data
- `useStartProcess()` - Start process execution with optimistic updates

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:

- Check the [UiPath Documentation](https://docs.uipath.com/)
- Review [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- Open an issue in this repository

---

Built with ❤️ using UiPath, React, and Cloudflare Workers