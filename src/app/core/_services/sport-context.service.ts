import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type SportType = 'football' | 'voleyball' | 'basketball';

@Injectable({
  providedIn: 'root',
})
export class SportContextService {
  private currentSportContext: BehaviorSubject<SportType>;

  sportName: Record<SportType, string> = {
    football: 'Piłka nożna',
    basketball: 'Koszykówka',
    voleyball: 'Siatkówka',
  };

  constructor() {
    this.currentSportContext = new BehaviorSubject<SportType>('football');
  }

  public getSportContextObservable() {
    return this.currentSportContext.asObservable();
  }

  public get currentSport(): SportType {
    return this.currentSportContext.value;
  }

  public get currentSportName(): string {
    return this.sportName[this.currentSportContext.value];
  }

  public sportNameString(select: SportType): string {
    return this.sportName[select];
  }

  public setSportContext(select: SportType) {
    this.currentSportContext.next(select);
  }
}
