import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NovaTransgerenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MensagemModule } from './components/mensagem/mensagem.module';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, NovaTransgerenciaComponent, ExtratoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MensagemModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
