import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ProviderRedux } from "react-redux";
import { store } from "./store.ts";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			gcTime: 0,
			staleTime: 0,
		},
	},
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ProviderRedux store={store}>
				<App />
				<ToastContainer
					position="bottom-right"
					autoClose={3000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable={false}
					pauseOnHover
					aria-label="Toast notifications"
				/>
			</ProviderRedux>
		</QueryClientProvider>
	</StrictMode>
);
