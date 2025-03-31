import type { JSX } from 'react';

export interface IProviderComposerProps extends React.PropsWithChildren {
  /**
   *  Providers list
   * */
  with: React.FC<React.PropsWithChildren>[];
}

const ComposerFragment: React.FC<React.PropsWithChildren> = ({
  children,
}: React.PropsWithChildren): JSX.Element => <>{children}</>;

const providerReducer =
  (
    ParentProvider: React.FC<React.PropsWithChildren>,
    ChildProvider: React.FC<React.PropsWithChildren>,
  ) =>
  ({ children }: React.PropsWithChildren) => (
    <ParentProvider>
      <ChildProvider>{children}</ChildProvider>
    </ParentProvider>
  );

/**
 * @Component
 * @name ProviderComposer
 * @description Component that receives a list of providers and composes them to a single component.
 */
const ProviderComposer = (props: IProviderComposerProps) => {
  const ComposedProviders = props.with.reduce(providerReducer, ComposerFragment);

  return <ComposedProviders>{props.children}</ComposedProviders>;
};

export default ProviderComposer;
