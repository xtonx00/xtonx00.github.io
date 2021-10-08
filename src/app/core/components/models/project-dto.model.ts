export class ProjectDto {
  public id: number;
  public title: string;
  public number: string;
  public description: string;
  public imageName: string;
  public linkOne: string;

  constructor(obj: any) {
    this.id = obj.id;
    this.title = obj.title;
    this.number = obj.number;
    this.description = obj.description;
    this.imageName = obj.imageName;
    this.linkOne = obj.linkOne;
  }
}
