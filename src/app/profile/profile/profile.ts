export class Profile {
    constructor(public profileId: string, public entityId: string, public title: string,
            public description: string, public tags: Array<string>) {}
}