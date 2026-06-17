import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function main(): void {
  const container = document.getElementById("layout");
  if (!container) {
    throw new Error("layout is undefined");
  }

  createRoot(container).render(<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <div>lol</div> } />
      </Routes>
    </BrowserRouter>
  </>);
}

main();
