import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'findLanguageFromKey'})
export class FindLanguageFromKeyPipe implements PipeTransform {
    private languages: any = {
        'en': { name: 'English' },
        'el': { name: 'Ελληνικά' },
        'hi': { name: 'हिंदी' },
        'hu': { name: 'Magyar' },
        'it': { name: 'Italiano' }
        // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
    };
    transform(lang: string): string {
        return this.languages[lang].name;
    }
}