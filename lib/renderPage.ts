type RendererCallback<
  DependencyTypes, 
  ConsumedResourcesTypes
> = (dependencies: DependencyTypes, resources: ConsumedResourcesTypes) => void;

const renderPage = <
  DependencyTypes, 
  ConsumedResourcesTypes
>(
  pageName: string, 
  rendererCallback: RendererCallback<DependencyTypes, ConsumedResourcesTypes>
) => {
}

export default renderPage;