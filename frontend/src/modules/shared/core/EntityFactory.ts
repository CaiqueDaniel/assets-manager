export interface EntityFactory<Props, Entity> {
  create(props: Props): Entity;
}
