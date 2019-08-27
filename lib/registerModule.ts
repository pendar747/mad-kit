import { PageRenderer } from "./renderPage";

interface ModuleConfig<ConsumedResourcesTypes, DependencyTypes> {
  name: string;
  description: string;
  pages: { [pageName: string]: PageRenderer<ConsumedResourcesTypes, DependencyTypes>}
}

const registerModule = <
  ConsumedResourcesTypes, 
  DependencyTypes, 
  ProducedResourcesTypes, 
  MessageTypes
>(
  moduleName: string, 
  moduleCallback: ModuleConfig<ConsumedResourcesTypes, DependencyTypes>
) => {
  
}

export default registerModule;