export class PracticeHelpers {
  private static practiceData: any = [{ message: 'empty data' }];
  public static startPracticeSeed = (): void => {
    PracticeHelpers.practiceData = [
      { user: 'Manuel Pinzón', age: 31 },
      { user: 'Manuel Pinzón', age: 31 },
    ];
  };
  public static getSeed = () => {
    return PracticeHelpers.practiceData;
  };
}
