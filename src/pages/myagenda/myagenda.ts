// Components, functions, plugins
import { Component, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { NavController, NavParams, LoadingController, FabContainer } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Database } from './../../providers/database/database';
import { Localstorage } from './../../providers/localstorage/localstorage';

declare var dateFormat: any;

// Pages
import { MyAgendaFull } from '../myagendafull/myagendafull';
import { ProgramPage } from '../program/program';


@Component({
  selector: 'page-myagenda',
  templateUrl: 'myagenda.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MyAgenda {

	// Display control variables, Wide Column
	public agendaEventShowW0700 = false;
	public agendaEventShowW0730 = false;
	public agendaEventShowW0800 = false;
	public agendaEventShowW0830 = false;
	public agendaEventShowW0900 = false;
	public agendaEventShowW0930 = false;
	public agendaEventShowW1000 = false;
	public agendaEventShowW1030 = false;
	public agendaEventShowW1100 = false;
	public agendaEventShowW1130 = false;
	public agendaEventShowW1200 = false;
	public agendaEventShowW1230 = false;
	public agendaEventShowW1300 = false;
	public agendaEventShowW1330 = false;
	public agendaEventShowW1400 = false;
	public agendaEventShowW1430 = false;
	public agendaEventShowW1500 = false;
	public agendaEventShowW1530 = false;
	public agendaEventShowW1600 = false;
	public agendaEventShowW1630 = false;
	public agendaEventShowW1700 = false;
	public agendaEventShowW1730 = false;
	public agendaEventShowW1800 = false;
	public agendaEventShowW1830 = false;
	public agendaEventShowW1900 = false;
	public agendaEventShowW1930 = false;
	public agendaEventShowW2000 = false;
	public agendaEventShowW2030 = false;
	public agendaEventShowW2100 = false;
	public agendaEventShowW2130 = false;
	public agendaEventShowW2200 = false;
	public agendaEventShowW2230 = false;

	// Display control variables, Column 1
	public agendaEventShow0700 = false;
	public agendaEventShow0730 = false;
	public agendaEventShow0800 = false;
	public agendaEventShow0830 = false;
	public agendaEventShow0900 = false;
	public agendaEventShow0930 = false;
	public agendaEventShow1000 = false;
	public agendaEventShow1030 = false;
	public agendaEventShow1100 = false;
	public agendaEventShow1130 = false;
	public agendaEventShow1200 = false;
	public agendaEventShow1230 = false;
	public agendaEventShow1300 = false;
	public agendaEventShow1330 = false;
	public agendaEventShow1400 = false;
	public agendaEventShow1430 = false;
	public agendaEventShow1500 = false;
	public agendaEventShow1530 = false;
	public agendaEventShow1600 = false;
	public agendaEventShow1630 = false;
	public agendaEventShow1700 = false;
	public agendaEventShow1730 = false;
	public agendaEventShow1800 = false;
	public agendaEventShow1830 = false;
	public agendaEventShow1900 = false;
	public agendaEventShow1930 = false;
	public agendaEventShow2000 = false;
	public agendaEventShow2030 = false;
	public agendaEventShow2100 = false;
	public agendaEventShow2130 = false;
	public agendaEventShow2200 = false;
	public agendaEventShow2230 = false;

	// Display control variables, Column 2
	public agendaEventShowC20700 = false;
	public agendaEventShowC20730 = false;
	public agendaEventShowC20800 = false;
	public agendaEventShowC20830 = false;
	public agendaEventShowC20900 = false;
	public agendaEventShowC20930 = false;
	public agendaEventShowC21000 = false;
	public agendaEventShowC21030 = false;
	public agendaEventShowC21100 = false;
	public agendaEventShowC21130 = false;
	public agendaEventShowC21200 = false;
	public agendaEventShowC21230 = false;
	public agendaEventShowC21300 = false;
	public agendaEventShowC21330 = false;
	public agendaEventShowC21400 = false;
	public agendaEventShowC21430 = false;
	public agendaEventShowC21500 = false;
	public agendaEventShowC21530 = false;
	public agendaEventShowC21600 = false;
	public agendaEventShowC21630 = false;
	public agendaEventShowC21700 = false;
	public agendaEventShowC21730 = false;
	public agendaEventShowC21800 = false;
	public agendaEventShowC21830 = false;
	public agendaEventShowC21900 = false;
	public agendaEventShowC21930 = false;
	public agendaEventShowC22000 = false;
	public agendaEventShowC22030 = false;
	public agendaEventShowC22200 = false;
	public agendaEventShowC22230 = false;
	public agendaEventShowC22300 = false;
	public agendaEventShowC22330 = false;
	
	// Day buttons
	public btnTue = "myButtonGreyBlue";
	public btnWed = "myButtonGreyBlue";
	public btnThu = "myButtonGreyBlue";
	public btnFri = "myButtonGreyBlue";
	public btnSat = "myButtonGreyBlue";
	
	public AllDayLeft = true;
	public AllDayRight = true;

	// Wide Column data placeholders
	public agendaEventTitleW0700 = "";
	public agendaEventTitleW0730 = "";
	public agendaEventTitleW0800 = "";
	public agendaEventTitleW0830 = "";
	public agendaEventTitleW0900 = "";
	public agendaEventTitleW0930 = "";
	public agendaEventTitleW1000 = "";
	public agendaEventTitleW1030 = "";
	public agendaEventTitleW1100 = "";
	public agendaEventTitleW1130 = "";
	public agendaEventTitleW1200 = "";
	public agendaEventTitleW1230 = "";
	public agendaEventTitleW1300 = "";
	public agendaEventTitleW1330 = "";
	public agendaEventTitleW1400 = "";
	public agendaEventTitleW1430 = "";
	public agendaEventTitleW1500 = "";
	public agendaEventTitleW1530 = "";
	public agendaEventTitleW1600 = "";
	public agendaEventTitleW1630 = "";
	public agendaEventTitleW1700 = "";
	public agendaEventTitleW1730 = "";
	public agendaEventTitleW1800 = "";
	public agendaEventTitleW1830 = "";
	public agendaEventTitleW1900 = "";
	public agendaEventTitleW1930 = "";
	public agendaEventTitleW2000 = "";
	public agendaEventTitleW2030 = "";
	public agendaEventTitleW2100 = "";
	public agendaEventTitleW2130 = "";
	public agendaEventTitleW2200 = "";
	public agendaEventTitleW2230 = "";
	public agendaEventTitleW2300 = "";
	public agendaEventTitleW2330 = "";
	public agendaEventTitleW2400 = "";
	public agendaEventTitleW2430 = "";

	public agendaLocationW0700 = "";
	public agendaLocationW0730 = "";
	public agendaLocationW0800 = "";
	public agendaLocationW0830 = "";
	public agendaLocationW0900 = "";
	public agendaLocationW0930 = "";
	public agendaLocationW1000 = "";
	public agendaLocationW1030 = "";
	public agendaLocationW1100 = "";
	public agendaLocationW1130 = "";
	public agendaLocationW1200 = "";
	public agendaLocationW1230 = "";
	public agendaLocationW1300 = "";
	public agendaLocationW1330 = "";
	public agendaLocationW1400 = "";
	public agendaLocationW1430 = "";
	public agendaLocationW1500 = "";
	public agendaLocationW1530 = "";
	public agendaLocationW1600 = "";
	public agendaLocationW1630 = "";
	public agendaLocationW1700 = "";
	public agendaLocationW1730 = "";
	public agendaLocationW1800 = "";
	public agendaLocationW1830 = "";
	public agendaLocationW1900 = "";
	public agendaLocationW1930 = "";
	public agendaLocationW2000 = "";
	public agendaLocationW2030 = "";
	public agendaLocationW2100 = "";
	public agendaLocationW2130 = "";
	public agendaLocationW2200 = "";
	public agendaLocationW2230 = "";
	public agendaLocationW2300 = "";
	public agendaLocationW2330 = "";
	public agendaLocationW2400 = "";
	public agendaLocationW2430 = "";

	public agendaStatusW0700 = "";
	public agendaStatusW0730 = "";
	public agendaStatusW0800 = "";
	public agendaStatusW0830 = "";
	public agendaStatusW0900 = "";
	public agendaStatusW0930 = "";
	public agendaStatusW1000 = "";
	public agendaStatusW1030 = "";
	public agendaStatusW1100 = "";
	public agendaStatusW1130 = "";
	public agendaStatusW1200 = "";
	public agendaStatusW1230 = "";
	public agendaStatusW1300 = "";
	public agendaStatusW1330 = "";
	public agendaStatusW1400 = "";
	public agendaStatusW1430 = "";
	public agendaStatusW1500 = "";
	public agendaStatusW1530 = "";
	public agendaStatusW1600 = "";
	public agendaStatusW1630 = "";
	public agendaStatusW1700 = "";
	public agendaStatusW1730 = "";
	public agendaStatusW1800 = "";
	public agendaStatusW1830 = "";
	public agendaStatusW1900 = "";
	public agendaStatusW1930 = "";
	public agendaStatusW2000 = "";
	public agendaStatusW2030 = "";
	public agendaStatusW2100 = "";
	public agendaStatusW2130 = "";
	public agendaStatusW2200 = "";
	public agendaStatusW2230 = "";
	public agendaStatusW2300 = "";
	public agendaStatusW2330 = "";
	public agendaStatusW2400 = "";
	public agendaStatusW2430 = "";

	public agendaStatusStyleW0700 = "";
	public agendaStatusStyleW0730 = "";
	public agendaStatusStyleW0800 = "";
	public agendaStatusStyleW0830 = "";
	public agendaStatusStyleW0900 = "";
	public agendaStatusStyleW0930 = "";
	public agendaStatusStyleW1000 = "";
	public agendaStatusStyleW1030 = "";
	public agendaStatusStyleW1100 = "";
	public agendaStatusStyleW1130 = "";
	public agendaStatusStyleW1200 = "";
	public agendaStatusStyleW1230 = "";
	public agendaStatusStyleW1300 = "";
	public agendaStatusStyleW1330 = "";
	public agendaStatusStyleW1400 = "";
	public agendaStatusStyleW1430 = "";
	public agendaStatusStyleW1500 = "";
	public agendaStatusStyleW1530 = "";
	public agendaStatusStyleW1600 = "";
	public agendaStatusStyleW1630 = "";
	public agendaStatusStyleW1700 = "";
	public agendaStatusStyleW1730 = "";
	public agendaStatusStyleW1800 = "";
	public agendaStatusStyleW1830 = "";
	public agendaStatusStyleW1900 = "";
	public agendaStatusStyleW1930 = "";
	public agendaStatusStyleW2000 = "";
	public agendaStatusStyleW2030 = "";
	public agendaStatusStyleW2100 = "";
	public agendaStatusStyleW2130 = "";
	public agendaStatusStyleW2200 = "";
	public agendaStatusStyleW2230 = "";
	public agendaStatusStyleW2300 = "";
	public agendaStatusStyleW2330 = "";
	public agendaStatusStyleW2400 = "";
	public agendaStatusStyleW2430 = "";

	public agendaEventClassW0700 = "";
	public agendaEventClassW0730 = "";
	public agendaEventClassW0800 = "";
	public agendaEventClassW0830 = "";
	public agendaEventClassW0900 = "";
	public agendaEventClassW0930 = "";
	public agendaEventClassW1000 = "";
	public agendaEventClassW1030 = "";
	public agendaEventClassW1100 = "";
	public agendaEventClassW1130 = "";
	public agendaEventClassW1200 = "";
	public agendaEventClassW1230 = "";
	public agendaEventClassW1300 = "";
	public agendaEventClassW1330 = "";
	public agendaEventClassW1400 = "";
	public agendaEventClassW1430 = "";
	public agendaEventClassW1500 = "";
	public agendaEventClassW1530 = "";
	public agendaEventClassW1600 = "";
	public agendaEventClassW1630 = "";
	public agendaEventClassW1700 = "";
	public agendaEventClassW1730 = "";
	public agendaEventClassW1800 = "";
	public agendaEventClassW1830 = "";
	public agendaEventClassW1900 = "";
	public agendaEventClassW1930 = "";
	public agendaEventClassW2000 = "";
	public agendaEventClassW2030 = "";
	public agendaEventClassW2100 = "";
	public agendaEventClassW2130 = "";
	public agendaEventClassW2200 = "";
	public agendaEventClassW2230 = "";
	public agendaEventClassW2300 = "";
	public agendaEventClassW2330 = "";
	public agendaEventClassW2400 = "";
	public agendaEventClassW2430 = "";

	public agendaEventIDW0700 = "";
	public agendaEventIDW0730 = "";
	public agendaEventIDW0800 = "";
	public agendaEventIDW0830 = "";
	public agendaEventIDW0900 = "";
	public agendaEventIDW0930 = "";
	public agendaEventIDW1000 = "";
	public agendaEventIDW1030 = "";
	public agendaEventIDW1100 = "";
	public agendaEventIDW1130 = "";
	public agendaEventIDW1200 = "";
	public agendaEventIDW1230 = "";
	public agendaEventIDW1300 = "";
	public agendaEventIDW1330 = "";
	public agendaEventIDW1400 = "";
	public agendaEventIDW1430 = "";
	public agendaEventIDW1500 = "";
	public agendaEventIDW1530 = "";
	public agendaEventIDW1600 = "";
	public agendaEventIDW1630 = "";
	public agendaEventIDW1700 = "";
	public agendaEventIDW1730 = "";
	public agendaEventIDW1800 = "";
	public agendaEventIDW1830 = "";
	public agendaEventIDW1900 = "";
	public agendaEventIDW1930 = "";
	public agendaEventIDW2000 = "";
	public agendaEventIDW2030 = "";
	public agendaEventIDW2100 = "";
	public agendaEventIDW2130 = "";
	public agendaEventIDW2200 = "";
	public agendaEventIDW2230 = "";
	public agendaEventIDW2300 = "";
	public agendaEventIDW2330 = "";
	public agendaEventIDW2400 = "";
	public agendaEventIDW2430 = "";

	// Column 1 data placeholders
	public agendaEventTitle0700 = "";
	public agendaEventTitle0730 = "";
	public agendaEventTitle0800 = "";
	public agendaEventTitle0830 = "";
	public agendaEventTitle0900 = "";
	public agendaEventTitle0930 = "";
	public agendaEventTitle1000 = "";
	public agendaEventTitle1030 = "";
	public agendaEventTitle1100 = "";
	public agendaEventTitle1130 = "";
	public agendaEventTitle1200 = "";
	public agendaEventTitle1230 = "";
	public agendaEventTitle1300 = "";
	public agendaEventTitle1330 = "";
	public agendaEventTitle1400 = "";
	public agendaEventTitle1430 = "";
	public agendaEventTitle1500 = "";
	public agendaEventTitle1530 = "";
	public agendaEventTitle1600 = "";
	public agendaEventTitle1630 = "";
	public agendaEventTitle1700 = "";
	public agendaEventTitle1730 = "";
	public agendaEventTitle1800 = "";
	public agendaEventTitle1830 = "";
	public agendaEventTitle1900 = "";
	public agendaEventTitle1930 = "";
	public agendaEventTitle2000 = "";
	public agendaEventTitle2030 = "";
	public agendaEventTitle2100 = "";
	public agendaEventTitle2130 = "";
	public agendaEventTitle2200 = "";
	public agendaEventTitle2230 = "";
	public agendaEventTitle2300 = "";
	public agendaEventTitle2330 = "";
	public agendaEventTitle2400 = "";
	public agendaEventTitle2430 = "";

	public agendaLocation0700 = "";
	public agendaLocation0730 = "";
	public agendaLocation0800 = "";
	public agendaLocation0830 = "";
	public agendaLocation0900 = "";
	public agendaLocation0930 = "";
	public agendaLocation1000 = "";
	public agendaLocation1030 = "";
	public agendaLocation1100 = "";
	public agendaLocation1130 = "";
	public agendaLocation1200 = "";
	public agendaLocation1230 = "";
	public agendaLocation1300 = "";
	public agendaLocation1330 = "";
	public agendaLocation1400 = "";
	public agendaLocation1430 = "";
	public agendaLocation1500 = "";
	public agendaLocation1530 = "";
	public agendaLocation1600 = "";
	public agendaLocation1630 = "";
	public agendaLocation1700 = "";
	public agendaLocation1730 = "";
	public agendaLocation1800 = "";
	public agendaLocation1830 = "";
	public agendaLocation1900 = "";
	public agendaLocation1930 = "";
	public agendaLocation2000 = "";
	public agendaLocation2030 = "";
	public agendaLocation2100 = "";
	public agendaLocation2130 = "";
	public agendaLocation2200 = "";
	public agendaLocation2230 = "";
	public agendaLocation2300 = "";
	public agendaLocation2330 = "";
	public agendaLocation2400 = "";
	public agendaLocation2430 = "";

	public agendaStatus0700 = "";
	public agendaStatus0730 = "";
	public agendaStatus0800 = "";
	public agendaStatus0830 = "";
	public agendaStatus0900 = "";
	public agendaStatus0930 = "";
	public agendaStatus1000 = "";
	public agendaStatus1030 = "";
	public agendaStatus1100 = "";
	public agendaStatus1130 = "";
	public agendaStatus1200 = "";
	public agendaStatus1230 = "";
	public agendaStatus1300 = "";
	public agendaStatus1330 = "";
	public agendaStatus1400 = "";
	public agendaStatus1430 = "";
	public agendaStatus1500 = "";
	public agendaStatus1530 = "";
	public agendaStatus1600 = "";
	public agendaStatus1630 = "";
	public agendaStatus1700 = "";
	public agendaStatus1730 = "";
	public agendaStatus1800 = "";
	public agendaStatus1830 = "";
	public agendaStatus1900 = "";
	public agendaStatus1930 = "";
	public agendaStatus2000 = "";
	public agendaStatus2030 = "";
	public agendaStatus2100 = "";
	public agendaStatus2130 = "";
	public agendaStatus2200 = "";
	public agendaStatus2230 = "";
	public agendaStatus2300 = "";
	public agendaStatus2330 = "";
	public agendaStatus2400 = "";
	public agendaStatus2430 = "";

	public agendaStatusStyle0700 = "";
	public agendaStatusStyle0730 = "";
	public agendaStatusStyle0800 = "";
	public agendaStatusStyle0830 = "";
	public agendaStatusStyle0900 = "";
	public agendaStatusStyle0930 = "";
	public agendaStatusStyle1000 = "";
	public agendaStatusStyle1030 = "";
	public agendaStatusStyle1100 = "";
	public agendaStatusStyle1130 = "";
	public agendaStatusStyle1200 = "";
	public agendaStatusStyle1230 = "";
	public agendaStatusStyle1300 = "";
	public agendaStatusStyle1330 = "";
	public agendaStatusStyle1400 = "";
	public agendaStatusStyle1430 = "";
	public agendaStatusStyle1500 = "";
	public agendaStatusStyle1530 = "";
	public agendaStatusStyle1600 = "";
	public agendaStatusStyle1630 = "";
	public agendaStatusStyle1700 = "";
	public agendaStatusStyle1730 = "";
	public agendaStatusStyle1800 = "";
	public agendaStatusStyle1830 = "";
	public agendaStatusStyle1900 = "";
	public agendaStatusStyle1930 = "";
	public agendaStatusStyle2000 = "";
	public agendaStatusStyle2030 = "";
	public agendaStatusStyle2100 = "";
	public agendaStatusStyle2130 = "";
	public agendaStatusStyle2200 = "";
	public agendaStatusStyle2230 = "";
	public agendaStatusStyle2300 = "";
	public agendaStatusStyle2330 = "";
	public agendaStatusStyle2400 = "";
	public agendaStatusStyle2430 = "";

	public agendaEventClass0700 = "";
	public agendaEventClass0730 = "";
	public agendaEventClass0800 = "";
	public agendaEventClass0830 = "";
	public agendaEventClass0900 = "";
	public agendaEventClass0930 = "";
	public agendaEventClass1000 = "";
	public agendaEventClass1030 = "";
	public agendaEventClass1100 = "";
	public agendaEventClass1130 = "";
	public agendaEventClass1200 = "";
	public agendaEventClass1230 = "";
	public agendaEventClass1300 = "";
	public agendaEventClass1330 = "";
	public agendaEventClass1400 = "";
	public agendaEventClass1430 = "";
	public agendaEventClass1500 = "";
	public agendaEventClass1530 = "";
	public agendaEventClass1600 = "";
	public agendaEventClass1630 = "";
	public agendaEventClass1700 = "";
	public agendaEventClass1730 = "";
	public agendaEventClass1800 = "";
	public agendaEventClass1830 = "";
	public agendaEventClass1900 = "";
	public agendaEventClass1930 = "";
	public agendaEventClass2000 = "";
	public agendaEventClass2030 = "";
	public agendaEventClass2100 = "";
	public agendaEventClass2130 = "";
	public agendaEventClass2200 = "";
	public agendaEventClass2230 = "";
	public agendaEventClass2300 = "";
	public agendaEventClass2330 = "";
	public agendaEventClass2400 = "";
	public agendaEventClass2430 = "";

	public agendaEventID0700 = "";
	public agendaEventID0730 = "";
	public agendaEventID0800 = "";
	public agendaEventID0830 = "";
	public agendaEventID0900 = "";
	public agendaEventID0930 = "";
	public agendaEventID1000 = "";
	public agendaEventID1030 = "";
	public agendaEventID1100 = "";
	public agendaEventID1130 = "";
	public agendaEventID1200 = "";
	public agendaEventID1230 = "";
	public agendaEventID1300 = "";
	public agendaEventID1330 = "";
	public agendaEventID1400 = "";
	public agendaEventID1430 = "";
	public agendaEventID1500 = "";
	public agendaEventID1530 = "";
	public agendaEventID1600 = "";
	public agendaEventID1630 = "";
	public agendaEventID1700 = "";
	public agendaEventID1730 = "";
	public agendaEventID1800 = "";
	public agendaEventID1830 = "";
	public agendaEventID1900 = "";
	public agendaEventID1930 = "";
	public agendaEventID2000 = "";
	public agendaEventID2030 = "";
	public agendaEventID2100 = "";
	public agendaEventID2130 = "";
	public agendaEventID2200 = "";
	public agendaEventID2230 = "";
	public agendaEventID2300 = "";
	public agendaEventID2330 = "";
	public agendaEventID2400 = "";
	public agendaEventID2430 = "";

	
	// Column 2 data placeholders
	public agendaEventTitleC20700 = "";
	public agendaEventTitleC20730 = "";
	public agendaEventTitleC20800 = "";
	public agendaEventTitleC20830 = "";
	public agendaEventTitleC20900 = "";
	public agendaEventTitleC20930 = "";
	public agendaEventTitleC21000 = "";
	public agendaEventTitleC21030 = "";
	public agendaEventTitleC21100 = "";
	public agendaEventTitleC21130 = "";
	public agendaEventTitleC21200 = "";
	public agendaEventTitleC21230 = "";
	public agendaEventTitleC21300 = "";
	public agendaEventTitleC21330 = "";
	public agendaEventTitleC21400 = "";
	public agendaEventTitleC21430 = "";
	public agendaEventTitleC21500 = "";
	public agendaEventTitleC21530 = "";
	public agendaEventTitleC21600 = "";
	public agendaEventTitleC21630 = "";
	public agendaEventTitleC21700 = "";
	public agendaEventTitleC21730 = "";
	public agendaEventTitleC21800 = "";
	public agendaEventTitleC21830 = "";
	public agendaEventTitleC21900 = "";
	public agendaEventTitleC21930 = "";
	public agendaEventTitleC22000 = "";
	public agendaEventTitleC22030 = "";
	public agendaEventTitleC22100 = "";
	public agendaEventTitleC22130 = "";
	public agendaEventTitleC22200 = "";
	public agendaEventTitleC22230 = "";
	public agendaEventTitleC22300 = "";
	public agendaEventTitleC22330 = "";
	public agendaEventTitleC22400 = "";
	public agendaEventTitleC22430 = "";

	public agendaLocationC20700 = "";
	public agendaLocationC20730 = "";
	public agendaLocationC20800 = "";
	public agendaLocationC20830 = "";
	public agendaLocationC20900 = "";
	public agendaLocationC20930 = "";
	public agendaLocationC21000 = "";
	public agendaLocationC21030 = "";
	public agendaLocationC21100 = "";
	public agendaLocationC21130 = "";
	public agendaLocationC21200 = "";
	public agendaLocationC21230 = "";
	public agendaLocationC21300 = "";
	public agendaLocationC21330 = "";
	public agendaLocationC21400 = "";
	public agendaLocationC21430 = "";
	public agendaLocationC21500 = "";
	public agendaLocationC21530 = "";
	public agendaLocationC21600 = "";
	public agendaLocationC21630 = "";
	public agendaLocationC21700 = "";
	public agendaLocationC21730 = "";
	public agendaLocationC21800 = "";
	public agendaLocationC21830 = "";
	public agendaLocationC21900 = "";
	public agendaLocationC21930 = "";
	public agendaLocationC22000 = "";
	public agendaLocationC22030 = "";
	public agendaLocationC22100 = "";
	public agendaLocationC22130 = "";
	public agendaLocationC22200 = "";
	public agendaLocationC22230 = "";
	public agendaLocationC22300 = "";
	public agendaLocationC22330 = "";
	public agendaLocationC22400 = "";
	public agendaLocationC22430 = "";

	public agendaStatusC20700 = "";
	public agendaStatusC20730 = "";
	public agendaStatusC20800 = "";
	public agendaStatusC20830 = "";
	public agendaStatusC20900 = "";
	public agendaStatusC20930 = "";
	public agendaStatusC21000 = "";
	public agendaStatusC21030 = "";
	public agendaStatusC21100 = "";
	public agendaStatusC21130 = "";
	public agendaStatusC21200 = "";
	public agendaStatusC21230 = "";
	public agendaStatusC21300 = "";
	public agendaStatusC21330 = "";
	public agendaStatusC21400 = "";
	public agendaStatusC21430 = "";
	public agendaStatusC21500 = "";
	public agendaStatusC21530 = "";
	public agendaStatusC21600 = "";
	public agendaStatusC21630 = "";
	public agendaStatusC21700 = "";
	public agendaStatusC21730 = "";
	public agendaStatusC21800 = "";
	public agendaStatusC21830 = "";
	public agendaStatusC21900 = "";
	public agendaStatusC21930 = "";
	public agendaStatusC22000 = "";
	public agendaStatusC22030 = "";
	public agendaStatusC22100 = "";
	public agendaStatusC22130 = "";
	public agendaStatusC22200 = "";
	public agendaStatusC22230 = "";
	public agendaStatusC22300 = "";
	public agendaStatusC22330 = "";
	public agendaStatusC22400 = "";
	public agendaStatusC22430 = "";

	public agendaStatusStyleC20700 = "";
	public agendaStatusStyleC20730 = "";
	public agendaStatusStyleC20800 = "";
	public agendaStatusStyleC20830 = "";
	public agendaStatusStyleC20900 = "";
	public agendaStatusStyleC20930 = "";
	public agendaStatusStyleC21000 = "";
	public agendaStatusStyleC21030 = "";
	public agendaStatusStyleC21100 = "";
	public agendaStatusStyleC21130 = "";
	public agendaStatusStyleC21200 = "";
	public agendaStatusStyleC21230 = "";
	public agendaStatusStyleC21300 = "";
	public agendaStatusStyleC21330 = "";
	public agendaStatusStyleC21400 = "";
	public agendaStatusStyleC21430 = "";
	public agendaStatusStyleC21500 = "";
	public agendaStatusStyleC21530 = "";
	public agendaStatusStyleC21600 = "";
	public agendaStatusStyleC21630 = "";
	public agendaStatusStyleC21700 = "";
	public agendaStatusStyleC21730 = "";
	public agendaStatusStyleC21800 = "";
	public agendaStatusStyleC21830 = "";
	public agendaStatusStyleC21900 = "";
	public agendaStatusStyleC21930 = "";
	public agendaStatusStyleC22000 = "";
	public agendaStatusStyleC22030 = "";
	public agendaStatusStyleC22100 = "";
	public agendaStatusStyleC22130 = "";
	public agendaStatusStyleC22200 = "";
	public agendaStatusStyleC22230 = "";
	public agendaStatusStyleC22300 = "";
	public agendaStatusStyleC22330 = "";
	public agendaStatusStyleC22400 = "";
	public agendaStatusStyleC22430 = "";

	public agendaEventClassC20700 = "";
	public agendaEventClassC20730 = "";
	public agendaEventClassC20800 = "";
	public agendaEventClassC20830 = "";
	public agendaEventClassC20900 = "";
	public agendaEventClassC20930 = "";
	public agendaEventClassC21000 = "";
	public agendaEventClassC21030 = "";
	public agendaEventClassC21100 = "";
	public agendaEventClassC21130 = "";
	public agendaEventClassC21200 = "";
	public agendaEventClassC21230 = "";
	public agendaEventClassC21300 = "";
	public agendaEventClassC21330 = "";
	public agendaEventClassC21400 = "";
	public agendaEventClassC21430 = "";
	public agendaEventClassC21500 = "";
	public agendaEventClassC21530 = "";
	public agendaEventClassC21600 = "";
	public agendaEventClassC21630 = "";
	public agendaEventClassC21700 = "";
	public agendaEventClassC21730 = "";
	public agendaEventClassC21800 = "";
	public agendaEventClassC21830 = "";
	public agendaEventClassC21900 = "";
	public agendaEventClassC21930 = "";
	public agendaEventClassC22000 = "";
	public agendaEventClassC22030 = "";
	public agendaEventClassC22100 = "";
	public agendaEventClassC22130 = "";
	public agendaEventClassC22200 = "";
	public agendaEventClassC22230 = "";
	public agendaEventClassC22300 = "";
	public agendaEventClassC22330 = "";
	public agendaEventClassC22400 = "";
	public agendaEventClassC22430 = "";

	public agendaEventIDC20700 = "";
	public agendaEventIDC20730 = "";
	public agendaEventIDC20800 = "";
	public agendaEventIDC20830 = "";
	public agendaEventIDC20900 = "";
	public agendaEventIDC20930 = "";
	public agendaEventIDC21000 = "";
	public agendaEventIDC21030 = "";
	public agendaEventIDC21100 = "";
	public agendaEventIDC21130 = "";
	public agendaEventIDC21200 = "";
	public agendaEventIDC21230 = "";
	public agendaEventIDC21300 = "";
	public agendaEventIDC21330 = "";
	public agendaEventIDC21400 = "";
	public agendaEventIDC21430 = "";
	public agendaEventIDC21500 = "";
	public agendaEventIDC21530 = "";
	public agendaEventIDC21600 = "";
	public agendaEventIDC21630 = "";
	public agendaEventIDC21700 = "";
	public agendaEventIDC21730 = "";
	public agendaEventIDC21800 = "";
	public agendaEventIDC21830 = "";
	public agendaEventIDC21900 = "";
	public agendaEventIDC21930 = "";
	public agendaEventIDC22000 = "";
	public agendaEventIDC22030 = "";
	public agendaEventIDC22100 = "";
	public agendaEventIDC22130 = "";
	public agendaEventIDC22200 = "";
	public agendaEventIDC22230 = "";
	public agendaEventIDC22300 = "";
	public agendaEventIDC22330 = "";
	public agendaEventIDC22400 = "";
	public agendaEventIDC22430 = "";


	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
				private storage: Storage,
				private databaseprovider: Database,
				private cd: ChangeDetectorRef,
				public loadingCtrl: LoadingController,
				private localstorage: Localstorage) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MyAgenda');
	}

	ionViewDidEnter() {
		console.log('ionViewDidEnter: MyAgenda');
		
		// Load / refresh data when coming to this page
		this.LoadData();
	}

    LoadData() {


		//let loading = this.loadingCtrl.create({
		//	spinner: 'crescent',
		//	content: 'Please wait...'

		//});

		//loading.present();



        this.AllDayLeft = true;
        this.AllDayRight = true;

		this.btnTue = "myButtonGreyBlue";
		this.btnWed = "myButtonGreyBlue";
		this.btnThu = "myButtonGreyBlue";
		this.btnFri = "myButtonGreyBlue";
		this.btnSat = "myButtonGreyBlue";

		// Show/Hide agenda item placeholders, wide column
        this.agendaEventShowW0700 = false;
        this.agendaEventShowW0730 = false;
        this.agendaEventShowW0800 = false;
        this.agendaEventShowW0830 = false;
        this.agendaEventShowW0900 = false;
        this.agendaEventShowW0930 = false;
        this.agendaEventShowW1000 = false;
        this.agendaEventShowW1030 = false;
        this.agendaEventShowW1100 = false;
        this.agendaEventShowW1130 = false;
        this.agendaEventShowW1200 = false;
        this.agendaEventShowW1230 = false;
        this.agendaEventShowW1300 = false;
        this.agendaEventShowW1330 = false;
        this.agendaEventShowW1400 = false;
        this.agendaEventShowW1430 = false;
        this.agendaEventShowW1500 = false;
        this.agendaEventShowW1530 = false;
        this.agendaEventShowW1600 = false;
        this.agendaEventShowW1630 = false;
        this.agendaEventShowW1700 = false;
        this.agendaEventShowW1730 = false;
        this.agendaEventShowW1800 = false;
        this.agendaEventShowW1830 = false;
        this.agendaEventShowW1900 = false;
        this.agendaEventShowW1930 = false;
        this.agendaEventShowW2000 = false;
        this.agendaEventShowW2030 = false;
        this.agendaEventShowW2100 = false;
        this.agendaEventShowW2130 = false;
        this.agendaEventShowW2200 = false;
        this.agendaEventShowW2230 = false;

        // Show/Hide agenda item placeholders, column 1
        this.agendaEventShow0700 = false;
        this.agendaEventShow0730 = false;
        this.agendaEventShow0800 = false;
        this.agendaEventShow0830 = false;
        this.agendaEventShow0900 = false;
        this.agendaEventShow0930 = false;
        this.agendaEventShow1000 = false;
        this.agendaEventShow1030 = false;
        this.agendaEventShow1100 = false;
        this.agendaEventShow1130 = false;
        this.agendaEventShow1200 = false;
        this.agendaEventShow1230 = false;
        this.agendaEventShow1300 = false;
        this.agendaEventShow1330 = false;
        this.agendaEventShow1400 = false;
        this.agendaEventShow1430 = false;
        this.agendaEventShow1500 = false;
        this.agendaEventShow1530 = false;
        this.agendaEventShow1600 = false;
        this.agendaEventShow1630 = false;
        this.agendaEventShow1700 = false;
        this.agendaEventShow1730 = false;
        this.agendaEventShow1800 = false;
        this.agendaEventShow1830 = false;
        this.agendaEventShow1900 = false;
        this.agendaEventShow1930 = false;
        this.agendaEventShow2000 = false;
        this.agendaEventShow2030 = false;
        this.agendaEventShow2100 = false;
        this.agendaEventShow2130 = false;
        this.agendaEventShow2200 = false;
        this.agendaEventShow2230 = false;

        this.agendaEventShowC20700 = false;
        this.agendaEventShowC20730 = false;
        this.agendaEventShowC20800 = false;
        this.agendaEventShowC20830 = false;
        this.agendaEventShowC20900 = false;
        this.agendaEventShowC20930 = false;
        this.agendaEventShowC21000 = false;
        this.agendaEventShowC21030 = false;
        this.agendaEventShowC21100 = false;
        this.agendaEventShowC21130 = false;
        this.agendaEventShowC21200 = false;
        this.agendaEventShowC21230 = false;
        this.agendaEventShowC21300 = false;
        this.agendaEventShowC21330 = false;
        this.agendaEventShowC21400 = false;
        this.agendaEventShowC21430 = false;
        this.agendaEventShowC21500 = false;
        this.agendaEventShowC21530 = false;
        this.agendaEventShowC21600 = false;
        this.agendaEventShowC21630 = false;
        this.agendaEventShowC21700 = false;
        this.agendaEventShowC21730 = false;
        this.agendaEventShowC21800 = false;
        this.agendaEventShowC21830 = false;
        this.agendaEventShowC21900 = false;
        this.agendaEventShowC21930 = false;
        this.agendaEventShowC22000 = false;
        this.agendaEventShowC22030 = false;
        this.agendaEventShowC22200 = false;
        this.agendaEventShowC22230 = false;
        this.agendaEventShowC22300 = false;
        this.agendaEventShowC22330 = false;

        var AgendaQueryDate = "";

		var AttendeeID = this.localstorage.getLocalValue('AttendeeID');
		var AgendaDisplayDate = this.localstorage.getLocalValue('AgendaDisplayDate');

		switch (AgendaDisplayDate) {
			case "6/1/2019":
				this.btnTue = "myButtonActive";
				AgendaQueryDate = "2019-06-01";
				break;
			case "6/2/2019":
				this.btnWed = "myButtonActive";
				AgendaQueryDate = "2019-06-02";
				break;
			case "6/3/2019":
				this.btnThu = "myButtonActive";
				AgendaQueryDate = "2019-06-03";
				break;
			case "6/4/2019":
				this.btnFri = "myButtonActive";
				AgendaQueryDate = "2019-06-04";
				break;
			case "6/5/2019":
				this.btnSat = "myButtonActive";
				AgendaQueryDate = "2019-06-05";
				break;
			default:
				this.btnTue = "myButtonActive";
				this.storage.set('AgendaDisplayDate', '6/1/2019');
				AgendaQueryDate = "2019-06-01";
				break;
		}

		var d = new Date(AgendaDisplayDate);
		var flags = "";

		flags = "li|" + AgendaQueryDate;
		
		this.databaseprovider.getAgendaData(flags, AttendeeID).then(data => {
			
			console.log("getAgendaData: " + JSON.stringify(data));

			if (data['length']>0) {
				
				console.log(data['length'] + ' agenda items for ' + AgendaDisplayDate);
				//this.agendaitems = [];

				for (var i1 = 0; i1 < data['length']; i1++) {
					
					// Don't display cards for these sessions
					if (data[i1].EventID != 'S-57984' && data[i1].EventID != 'S-57987') {
						
						var eventSTime = data[i1].EventStartTime;
						var Sparts = eventSTime.split(':'),
						Starthour = Sparts[0],
						Startminutes = Sparts[1];
						
						// Quarter hour adjustment
						if (Startminutes == '15') {
							Startminutes = '00';
						}
						if (Startminutes == '45') {
							Startminutes = '00';
							Starthour = parseInt(Starthour, 10) + 1;
						}
						
						var agendaStartTime = Starthour + Startminutes;
						// Adjustment to ensure leading zero
						agendaStartTime = '0' + agendaStartTime;
						agendaStartTime = agendaStartTime.substr(-4);
						
						var eventETime = data[i1].EventEndTime;
						var Eparts = eventETime.split(':'),
						Endhour = Eparts[0],
						Endminutes = Eparts[1];
						
						// Quarter hour adjustment
						if (Endminutes == '15') {
							Endminutes = '00';
						}
						if (Endminutes == '45') {
							Endminutes = '00';
							Endhour = parseInt(Endhour, 10) + 1;
						}

						var agendaEndTime = Endhour + Endminutes;
						// Adjustment to ensure leading zero
						agendaEndTime = '0' + agendaEndTime;
						agendaEndTime = agendaEndTime.substr(-4);
						
						var idEventTitle = "";
						var idEventLocation = "";
						var idEventStatus = "";
						var idEventStatusStyle = "";
						var idEventClass = "";
						var idEventID = "";
						var idEventShow = "";
						var ColumnSelection = "";
											
						// Status checks
						var visSessionStatus = "";
						var visStatusStyle = "SessionStatusNormal";
						if (data[i1].Waitlist == "1") {
							visSessionStatus = "You are Waitlisted";
							visStatusStyle = "SessionStatusRed";
						}
						
						idEventClass = "agendaEventClass" + agendaStartTime;
						idEventShow = "agendaEventShowW" + agendaStartTime;
											
						if (!this[idEventShow]) {
							
							// Wide Column
							idEventTitle = "agendaEventTitleW" + agendaStartTime;
							idEventLocation = "agendaLocationW" + agendaStartTime;
							idEventStatus = "agendaStatusW" + agendaStartTime;
							idEventStatusStyle = "agendaStatusStyleW" + agendaStartTime;
							idEventClass = "agendaEventClassW" + agendaStartTime;
							idEventID = "agendaEventIDW" + agendaStartTime;
							idEventShow = "agendaEventShowW" + agendaStartTime;
							ColumnSelection = "";

							if (data[i1].EventName != null) {
								this[idEventTitle] = data[i1].EventName;
								this[idEventLocation] = data[i1].EventLocation;
							} else {
								var tempTitle = "Meeting with ";
								// If available, use Nickname field for First Name
								if (data[i1].Nickname != "" && data[i1].Nickname != null) {
									tempTitle = tempTitle + data[i1].Nickname;
								} else {
									tempTitle = tempTitle + data[i1].FirstName;
								}
								tempTitle = tempTitle + " " + data[i1].LastName;
								tempTitle = tempTitle + " (" + data[i1].Party.charAt(0) + " - " + data[i1].State + ")";
								this[idEventTitle] = tempTitle;
								this[idEventLocation] = data[i1].Address;
							}

							this[idEventStatus] = visSessionStatus;
							this[idEventStatusStyle] = visStatusStyle;
							this[idEventID] = "'" + data[i1].EventID + '|' + data[i1].mtgID + "'";
							this[idEventShow] = true;
							
							// Calculate course duration and use an appropriate card
							var CalcstartDate = +new Date(0, 0, 0, Starthour, Startminutes);
							var CalcendDate = +new Date(0, 0, 0, Endhour, Endminutes);
							var millis = CalcendDate - CalcstartDate;
							var minutes = millis / 1000 / 60;
							

							if (data[i1].EventID != "0") {
								
								if ((minutes >= 0) && (minutes <= 30)) {
									this[idEventClass] = "myCard30" + ColumnSelection;
								} else if ((minutes > 30) && (minutes <= 60)) {
									this[idEventClass] = "myCard60" + ColumnSelection;
								} else if ((minutes > 60) && (minutes <= 90)) {
									this[idEventClass] = "myCard90" + ColumnSelection;
								} else if ((minutes > 90) && (minutes <= 120)) {
									this[idEventClass] = "myCard120" + ColumnSelection;
								} else if ((minutes > 120) && (minutes <= 150)) {
									this[idEventClass] = "myCard150" + ColumnSelection;
								} else if ((minutes > 150) && (minutes <= 180)) {
									this[idEventClass] = "myCard180" + ColumnSelection;
								} else if ((minutes > 180) && (minutes <= 210)) {
									this[idEventClass] = "myCard210" + ColumnSelection;
								} else if ((minutes > 210) && (minutes <= 240)) {
									this[idEventClass] = "myCard240" + ColumnSelection;
								} else if ((minutes > 330) && (minutes <= 360)) {
									this[idEventClass] = "myCard360" + ColumnSelection;
								} else {
									this[idEventClass] = "myCard120" + ColumnSelection;
								}
								console.log(this[idEventClass] + ": " + data[i1].EventName);
								console.log('Start: ' + agendaStartTime + ', End: ' + agendaEndTime);
							} else {
								if ((minutes >= 0) && (minutes <= 30)) {
									this[idEventClass] = "myCard30P" + ColumnSelection;
								} else if ((minutes > 30) && (minutes <= 60)) {
									this[idEventClass] = "myCard60P" + ColumnSelection;
								} else if ((minutes > 60) && (minutes <= 90)) {
									this[idEventClass] = "myCard90P" + ColumnSelection;
								} else if ((minutes > 90) && (minutes <= 120)) {
									this[idEventClass] = "myCard120P" + ColumnSelection;
								} else if ((minutes > 120) && (minutes <= 150)) {
									this[idEventClass] = "myCard150P" + ColumnSelection;
								} else if ((minutes > 150) && (minutes <= 180)) {
									this[idEventClass] = "myCard180P" + ColumnSelection;
								} else if ((minutes > 180) && (minutes <= 210)) {
									this[idEventClass] = "myCard210P" + ColumnSelection;
								} else if ((minutes > 210) && (minutes <= 240)) {
									this[idEventClass] = "myCard240P" + ColumnSelection;
								} else if ((minutes > 330) && (minutes <= 360)) {
									this[idEventClass] = "myCard360P" + ColumnSelection;
								} else {
									this[idEventClass] = "myCard120P" + ColumnSelection;
								}
								console.log(this[idEventClass] + ": " + data[i1].EventName);
								console.log('Start: ' + agendaStartTime + ', End: ' + agendaEndTime);
							}

							
							// Column 1
							idEventTitle = "agendaEventTitle" + agendaStartTime;
							idEventLocation = "agendaLocation" + agendaStartTime;
							idEventStatus = "agendaStatus" + agendaStartTime;
							idEventStatusStyle = "agendaStatusStyle" + agendaStartTime;
							idEventClass = "agendaEventClass" + agendaStartTime;
							idEventID = "agendaEventID" + agendaStartTime;
							idEventShow = "agendaEventShow" + agendaStartTime;
							
							if (data[i1].EventName != null) {
								this[idEventTitle] = data[i1].EventName;
								this[idEventLocation] = data[i1].EventLocation;
							} else {
								var tempTitle = "Meeting with ";
								// If available, use Nickname field for First Name
								if (data[i1].Nickname != "" && data[i1].Nickname != null) {
									tempTitle = tempTitle + data[i1].Nickname;
								} else {
									tempTitle = tempTitle + data[i1].FirstName;
								}
								tempTitle = tempTitle + " " + data[i1].LastName;
								tempTitle = tempTitle + " (" + data[i1].Party.charAt(0) + " - " + data[i1].State + ")";
								this[idEventTitle] = tempTitle;
								this[idEventLocation] = data[i1].Address;
							}

							this[idEventStatus] = visSessionStatus;
							this[idEventStatusStyle] = visStatusStyle;
							this[idEventID] = "'" + data[i1].EventID + '|' + data[i1].mtgID + "'";

							// Calculate course duration and use an appropriate card
							var CalcstartDate = +new Date(0, 0, 0, Starthour, Startminutes);
							var CalcendDate = +new Date(0, 0, 0, Endhour, Endminutes);
							var millis = CalcendDate - CalcstartDate;
							var minutes = millis / 1000 / 60;
							
							if (data[i1].EventID != "0") {
								
								if ((minutes >= 0) && (minutes <= 30)) {
									this[idEventClass] = "myCard30" + ColumnSelection;
								} else if ((minutes > 30) && (minutes <= 60)) {
									this[idEventClass] = "myCard60" + ColumnSelection;
								} else if ((minutes > 60) && (minutes <= 90)) {
									this[idEventClass] = "myCard90" + ColumnSelection;
								} else if ((minutes > 90) && (minutes <= 120)) {
									this[idEventClass] = "myCard120" + ColumnSelection;
								} else if ((minutes > 120) && (minutes <= 150)) {
									this[idEventClass] = "myCard150" + ColumnSelection;
								} else if ((minutes > 150) && (minutes <= 180)) {
									this[idEventClass] = "myCard180" + ColumnSelection;
								} else if ((minutes > 180) && (minutes <= 210)) {
									this[idEventClass] = "myCard210" + ColumnSelection;
								} else if ((minutes > 210) && (minutes <= 240)) {
									this[idEventClass] = "myCard240" + ColumnSelection;
								} else if ((minutes > 330) && (minutes <= 360)) {
									this[idEventClass] = "myCard360" + ColumnSelection;
								} else {
									this[idEventClass] = "myCard120" + ColumnSelection;
								}
								console.log(this[idEventClass] + ": " + data[i1].EventName);
								console.log('Start: ' + agendaStartTime + ', End: ' + agendaEndTime);
							} else {
								if ((minutes >= 0) && (minutes <= 30)) {
									this[idEventClass] = "myCard30P" + ColumnSelection;
								} else if ((minutes > 30) && (minutes <= 60)) {
									this[idEventClass] = "myCard60P" + ColumnSelection;
								} else if ((minutes > 60) && (minutes <= 90)) {
									this[idEventClass] = "myCard90P" + ColumnSelection;
								} else if ((minutes > 90) && (minutes <= 120)) {
									this[idEventClass] = "myCard120P" + ColumnSelection;
								} else if ((minutes > 120) && (minutes <= 150)) {
									this[idEventClass] = "myCard150P" + ColumnSelection;
								} else if ((minutes > 150) && (minutes <= 180)) {
									this[idEventClass] = "myCard180P" + ColumnSelection;
								} else if ((minutes > 180) && (minutes <= 210)) {
									this[idEventClass] = "myCard210P" + ColumnSelection;
								} else if ((minutes > 210) && (minutes <= 240)) {
									this[idEventClass] = "myCard240P" + ColumnSelection;
								} else if ((minutes > 330) && (minutes <= 360)) {
									this[idEventClass] = "myCard360P" + ColumnSelection;
								} else {
									this[idEventClass] = "myCard120P" + ColumnSelection;
								}
								console.log(this[idEventClass] + ": " + data[i1].EventName);
								console.log('Start: ' + agendaStartTime + ', End: ' + agendaEndTime);
							}
							
						} else {
							
							idEventTitle = "agendaEventTitleC2" + agendaStartTime;
							idEventLocation = "agendaLocationC2" + agendaStartTime;
							idEventStatus = "agendaStatusC2" + agendaStartTime;
							idEventStatusStyle = "agendaStatusStyleC2" + agendaStartTime;
							idEventClass = "agendaEventClassC2" + agendaStartTime;
							idEventID = "agendaEventIDC2" + agendaStartTime;
							idEventShow = "agendaEventShowC2" + agendaStartTime;
							ColumnSelection = "C2";
							
							if (data[i1].EventName != null) {
								this[idEventTitle] = data[i1].EventName;
								this[idEventLocation] = data[i1].EventLocation;
							} else {
								var tempTitle = "Meeting with ";
								// If available, use Nickname field for First Name
								if (data[i1].Nickname != "" && data[i1].Nickname != null) {
									tempTitle = tempTitle + data[i1].Nickname;
								} else {
									tempTitle = tempTitle + data[i1].FirstName;
								}
								tempTitle = tempTitle + " " + data[i1].LastName;
								tempTitle = tempTitle + " (" + data[i1].Party.charAt(0) + " - " + data[i1].State + ")";
								this[idEventTitle] = tempTitle;
								this[idEventLocation] = data[i1].Address;
							}
							this[idEventStatus] = visSessionStatus;
							this[idEventStatusStyle] = visStatusStyle;
							this[idEventID] = "'" + data[i1].EventID + '|' + data[i1].mtgID + "'";
							this[idEventShow] = true;
							

							// Calculate course duration and use an appropriate card
							var CalcstartDate = +new Date(0, 0, 0, Starthour, Startminutes);
							var CalcendDate = +new Date(0, 0, 0, Endhour, Endminutes);
							var millis = CalcendDate - CalcstartDate;
							var minutes = millis / 1000 / 60;
							
							if (data[i1].EventID != "0") {
								
								if ((minutes >= 0) && (minutes <= 30)) {
									this[idEventClass] = "myCard30" + ColumnSelection;
								} else if ((minutes > 30) && (minutes <= 60)) {
									this[idEventClass] = "myCard60" + ColumnSelection;
								} else if ((minutes > 60) && (minutes <= 90)) {
									this[idEventClass] = "myCard90" + ColumnSelection;
								} else if ((minutes > 90) && (minutes <= 120)) {
									this[idEventClass] = "myCard120" + ColumnSelection;
								} else if ((minutes > 120) && (minutes <= 150)) {
									this[idEventClass] = "myCard150" + ColumnSelection;
								} else if ((minutes > 150) && (minutes <= 180)) {
									this[idEventClass] = "myCard180" + ColumnSelection;
								} else if ((minutes > 180) && (minutes <= 210)) {
									this[idEventClass] = "myCard210" + ColumnSelection;
								} else if ((minutes > 210) && (minutes <= 240)) {
									this[idEventClass] = "myCard240" + ColumnSelection;
								} else if ((minutes > 330) && (minutes <= 360)) {
									this[idEventClass] = "myCard360" + ColumnSelection;
								} else {
									this[idEventClass] = "myCard120" + ColumnSelection;
								}
								console.log(this[idEventClass] + ": " + data[i1].EventName);
								console.log('Start: ' + agendaStartTime + ', End: ' + agendaEndTime);
							} else {
								if ((minutes >= 0) && (minutes <= 30)) {
									this[idEventClass] = "myCard30P" + ColumnSelection;
								} else if ((minutes > 30) && (minutes <= 60)) {
									this[idEventClass] = "myCard60P" + ColumnSelection;
								} else if ((minutes > 60) && (minutes <= 90)) {
									this[idEventClass] = "myCard90P" + ColumnSelection;
								} else if ((minutes > 90) && (minutes <= 120)) {
									this[idEventClass] = "myCard120P" + ColumnSelection;
								} else if ((minutes > 120) && (minutes <= 150)) {
									this[idEventClass] = "myCard150P" + ColumnSelection;
								} else if ((minutes > 150) && (minutes <= 180)) {
									this[idEventClass] = "myCard180P" + ColumnSelection;
								} else if ((minutes > 180) && (minutes <= 210)) {
									this[idEventClass] = "myCard210P" + ColumnSelection;
								} else if ((minutes > 210) && (minutes <= 240)) {
									this[idEventClass] = "myCard240P" + ColumnSelection;
								} else if ((minutes > 330) && (minutes <= 360)) {
									this[idEventClass] = "myCard360P" + ColumnSelection;
								} else {
									this[idEventClass] = "myCard120P" + ColumnSelection;
								}
								console.log(this[idEventClass] + ": " + data[i1].EventName);
								console.log('Start: ' + agendaStartTime + ', End: ' + agendaEndTime);
							}
							
							// Switch from Wide Column to Column 1
							idEventShow = "agendaEventShowW" + agendaStartTime;
							this[idEventShow] = false;
							
							idEventShow = "agendaEventShow" + agendaStartTime;
							this[idEventShow] = true;
						
						}
						
					}
				
				}

			}

			this.cd.markForCheck();

			//loading.dismiss();
			
		}).catch(function () {
			console.log("Promise Rejected");
		});

	}

    DayUpdate(DayName) {

        switch (DayName) {
            case "Sat":
				this.localstorage.setLocalValue('AgendaDisplayDate', '6/1/2019');
                break;
            case "Sun":
				this.localstorage.setLocalValue('AgendaDisplayDate', '6/2/2019');
                break;
            case "Mon":
				this.localstorage.setLocalValue('AgendaDisplayDate', '6/3/2019');
                break;
            case "Tue":
				this.localstorage.setLocalValue('AgendaDisplayDate', '6/4/2019');
                break;
            case "Wed":
				this.localstorage.setLocalValue('AgendaDisplayDate', '6/5/2019');
                break;
            default:
				this.localstorage.setLocalValue('AgendaDisplayDate', '6/1/2019');
                break
        }

        this.LoadData();

    };

    GoProgramOverview(fab: FabContainer) {

		// Close fab buttons
		fab.close();
		
		this.navCtrl.push(ProgramPage, {}, {animate: true, direction: 'forward'});

	};
	


    GoMyAgendaFull(fab: FabContainer) {

		// Close fab buttons
		fab.close();
		
		this.navCtrl.push(MyAgendaFull, {}, {animate: true, direction: 'forward'});

    };




    AddPersonalEvent(fab: FabContainer) {

		// Close fab buttons
		fab.close();

		// Generate random number for personal event ID
		var min = Math.ceil(10000);
		var max = Math.floor(99999);
		var storePersonalEventID = Math.floor(Math.random() * (max - min + 1)) + min;
		console.log('New personalID: ' + storePersonalEventID);
		
        // Set EventID to LocalStorage
		this.localstorage.setLocalValue('PersonalEventID', storePersonalEventID);
		
        // Navigate to Personal Event page
		this.navCtrl.push('MyAgendaPersonal', {EventID: storePersonalEventID}, {animate: true, direction: 'forward'});

    };

    navViewFullAgenda() {
		this.navCtrl.push(MyAgendaFull, {}, {animate: true, direction: 'forward'});

    };

    nav(EventID) {
		
		console.log("Btn ID: " + EventID);
		
        var IDSplit = EventID.split("|");

        var storeEventID = IDSplit[0].replace("'","");
        var storePersonalEventID = IDSplit[1].replace("'", "");
		console.log("storeEventID: " + storeEventID);
		console.log("storePersonalEventID: " + storePersonalEventID);

        if (storeEventID == "0" && storePersonalEventID == "0") {
            // Do nothing
        } else {
            if (storeEventID == "0") {

                // Set EventID to LocalStorage
				this.localstorage.setLocalValue('PersonalEventID', storePersonalEventID);

                // Navigate to Education Details page
				this.navCtrl.push('MyAgendaPersonal', {EventID: storePersonalEventID}, {animate: true, direction: 'forward'});

            } else {

                // Set EventID to LocalStorage
				this.localstorage.setLocalValue('EventID', storeEventID);

                // Navigate to Education Details page
				this.navCtrl.push('EducationDetailsPage', {EventID: storeEventID}, {animate: true, direction: 'forward'});

            }
		}
		

    };

}

