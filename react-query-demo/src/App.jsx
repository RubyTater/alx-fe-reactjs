

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    keepPreviousData: true,
    refetchOnWindowFocus
  }
});

function App() {
  return (
   <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
  )
}

export default App
