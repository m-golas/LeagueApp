import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SportType } from '../_models/sport-type';

@Injectable({
  providedIn: 'root',
})
export class SportContextService {
  private currentSportContext: BehaviorSubject<SportType>;

  sportName: Record<SportType, string> = {
    FOOTBALL: 'Piłka nożna',
    BASKETBALL: 'Koszykówka',
    VOLLEYBALL: 'Siatkówka',
  };

  constructor() {
    this.currentSportContext = new BehaviorSubject<SportType>('FOOTBALL');
  }

  public reload() {
    this.currentSportContext.next(this.currentSportContext.value)
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
