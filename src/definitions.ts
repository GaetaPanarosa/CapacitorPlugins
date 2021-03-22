export interface MacAddressPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
