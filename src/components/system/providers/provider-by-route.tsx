import ProviderComposer from '@/lib/provider-composer';

const ProvidersByRoute = ({
  providers = [],
  children,
}: { providers?: React.FC<React.PropsWithChildren>[]; children?: React.ReactNode }) => {
  if (!providers || providers.length === 0) {
    return children;
  }

  return <ProviderComposer with={providers}>{children}</ProviderComposer>;
};

export default ProvidersByRoute;
