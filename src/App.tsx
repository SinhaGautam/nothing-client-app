import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Everything from "./pages/Everything";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import About from "./components/about";
import ProductPage from "./pages/ProductPage";
import Transparency from "./components/transparency";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/header";
import Footer from "./components/footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/everything" component={Everything} />
      <Route path="/about" component={About} />
      <Route path="/products" component={ProductPage} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/tranparency" component={Transparency} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Header />
        
        <Router />
        <Footer />
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default App
