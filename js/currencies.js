/**
 * Created by mak on 08/03/17.
 */
let currencies =
    {
        'AFN': {
            'description': 'Afghanistan Afghani',
            'append': ''
        },
        'ALL': {
            'description': 'Albania Lek',
            'append': ''
        },
        'DZD': {
            'description': 'Algeria Dinar',
            'append': ''
        },
        'AOA': {
            'description': 'Angola Kwanza',
            'append': ''
        },
        'ARS': {
            'description': 'Argentina Peso',
            'append': ''
        },
        'AMD': {
            'description': 'Armenia Dram',
            'append': ''
        },
        'AWG': {
            'description': 'Aruba Florin',
            'append': ''
        },
        'AUD': {
            'description': 'Australia Dollar',
            'append': '',
            'baseScore': 0,
            'compareScore': 0
        },
        'ATS': {
            'description': 'Austria Schilling',
            'append': '(EURO)'
        },
        'BEF': {
            'description': 'Belgium Franc',
            'append': '(EURO)'
        },
        'AZN': {
            'description': 'Azerbaijan New Manat',
            'append': ''
        },
        'BSD': {
            'description': 'Bahamas Dollar',
            'append': ''
        },
        'BHD': {
            'description': 'Bahrain Dinar',
            'append': ''
        },
        'BDT': {
            'description': 'Bangladesh Taka',
            'append': ''
        },
        'BBD': {
            'description': 'Barbados Dollar',
            'append': ''
        },
        'BYR': {
            'description': 'Belarus Ruble',
            'append': ''
        },
        'BZD': {
            'description': 'Belize Dollar',
            'append': ''
        },
        'BMD': {
            'description': 'Bermuda Dollar',
            'append': ''
        },
        'BTN': {
            'description': 'Bhutan Ngultrum',
            'append': ''
        },
        'BOB': {
            'description': 'Bolivia Boliviano',
            'append': ''
        },
        'BAM': {
            'description': 'Bosnia Mark',
            'append': ''
        },
        'BWP': {
            'description': 'Botswana Pula',
            'append': ''
        },
        'BRL': {
            'description': 'Brazil Real',
            'append': ''
        },
        'GBP': {
            'description': 'Great Britain Pound',
            'append': '',
            'baseScore': 0,
            'compareScore': 0
        },
        'BND': {
            'description': 'Brunei Dollar',
            'append': ''
        },
        'BGN': {
            'description': 'Bulgaria Lev',
            'append': ''
        },
        'BIF': {
            'description': 'Burundi Franc',
            'append': ''
        },
        'XOF': {
            'description': 'CFA Franc BCEAO',
            'append': ''
        },
        'XAF': {
            'description': 'CFA Franc BEAC',
            'append': ''
        },
        'XPF': {
            'description': 'CFP Franc',
            'append': ''
        },
        'KHR': {
            'description': 'Cambodia Riel',
            'append': ''
        },
        'CAD': {
            'description': 'Canada Dollar',
            'append': ''
        },
        'CVE': {
            'description': 'Cape Verde Escudo',
            'append': ''
        },
        'KYD': {
            'description': 'Cayman Islands Dollar',
            'append': ''
        },
        'CLP': {
            'description': 'Chili Peso',
            'append': ''
        },
        'CNY': {
            'description': 'China Yuan/Renminbi',
            'append': ''
        },
        'COP': {
            'description': 'Colombia Peso',
            'append': ''
        },
        'KMF': {
            'description': 'Comoros Franc',
            'append': ''
        },
        'CDF': {
            'description': 'Congo Franc',
            'append': ''
        },
        'CRC': {
            'description': 'Costa Rica Colon',
            'append': ''
        },
        'HRK': {
            'description': 'Croatia Kuna',
            'append': ''
        },
        'CUC': {
            'description': 'Cuba Convertible Peso',
            'append': ''
        },
        'CUP': {
            'description': 'Cuba Peso',
            'append': ''
        },
        'CYP': {
            'description': 'Cyprus Pound',
            'append': '(EURO)'
        },
        'CZK': {
            'description': 'Czech Koruna',
            'append': ''
        },
        'DKK': {
            'description': 'Denmark Krone',
            'append': ''
        },
        'DJF': {
            'description': 'Djibouti Franc',
            'append': ''
        },
        'DOP': {
            'description': 'Dominican Republich Peso',
            'append': ''
        },
        'XCD': {
            'description': 'East Caribbean Dollar',
            'append': ''
        },
        'EGP': {
            'description': 'Egypt Pound',
            'append': ''
        },
        'SVC': {
            'description': 'El Salvador Colon',
            'append': ''
        },
        'EEK': {
            'description': 'Estonia Kroon',
            'append': '(EURO)'
        },
        'ETB': {
            'description': 'Ethiopia Birr',
            'append': ''
        },
        'EUR': {
            'description': 'Euro',
            'append': '',
            'baseScore': 0,
            'compareScore': 0
        },
        'FKP': {
            'description': 'Falkland Islands Pound',
            'append': ''
        },
        'FIM': {
            'description': 'Finland Markka',
            'append': '(EURO)'
        },
        'FJD': {
            'description': 'Fiji Dollar',
            'append': ''
        },
        'GMD': {
            'description': 'Gambia Dalasi',
            'append': ''
        },
        'GEL': {
            'description': 'Georgia Lari',
            'append': ''
        },
        'DMK': {
            'description': 'Germany Mark',
            'append': '(EURO)'
        },
        'GHS': {
            'description': 'Ghana New Cedi',
            'append': ''
        },
        'GIP': {
            'description': 'Gibraltar Pound',
            'append': ''
        },
        'GRD': {
            'description': 'Greece Drachma',
            'append': '(EURO)'
        },
        'GTQ': {
            'description': 'Guatemala Quetzal',
            'append': ''
        },
        'GNF': {
            'description': 'Guinea Franc',
            'append': ''
        },
        'GYD': {
            'description': 'Guyana Dollar',
            'append': ''
        },
        'HTG': {
            'description': 'Haiti Gourde',
            'append': ''
        },
        'HNL': {
            'description': 'Honduras Lempira',
            'append': ''
        },
        'HKD': {
            'description': 'Hong Kong Dollar',
            'append': ''
        },
        'HUF': {
            'description': 'Hungary Forint',
            'append': ''
        },
        'ISK': {
            'description': 'Iceland Krona',
            'append': ''
        },
        'INR': {
            'description': 'India Rupee',
            'append': ''
        },
        'IDR': {
            'description': 'Indonesia Rupiah',
            'append': ''
        },
        'IRR': {
            'description': 'Iran Rial',
            'append': ''
        },
        'IQD': {
            'description': 'Iraq Dinar',
            'append': ''
        },
        'IED': {
            'description': 'Ireland Pound',
            'append': '(EURO)'
        },
        'ILS': {
            'description': 'Israel New Shekel',
            'append': ''
        },
        'ITL': {
            'description': 'Italy Lira',
            'append': '(EURO)'
        },
        'JMD': {
            'description': 'Jamaica Dollar',
            'append': ''
        },
        'JPY': {
            'description': 'Japan Yen',
            'append': '',
            'baseScore': 0,
            'compareScore': 0
        },
        'JOD': {
            'description': 'Jordan Dinar',
            'append': ''
        },
        'KZT': {
            'description': 'Kazakhstan Tenge',
            'append': ''
        },
        'KES': {
            'description': 'Kenya Shilling',
            'append': ''
        },
        'KWD': {
            'description': 'Kuwait Dinar',
            'append': ''
        },
        'KGS': {
            'description': 'Kyrgyzstan Som',
            'append': ''
        },
        'LAK': {
            'description': 'Laos Kip',
            'append': ''
        },
        'LVL': {
            'description': 'Latvia Lats',
            'append': '(EURO)'
        },
        'LBP': {
            'description': 'Lebanon Pound',
            'append': ''
        },
        'LSL': {
            'description': 'Lesotho Loti',
            'append': ''
        },
        'LRD': {
            'description': 'Liberia Dollar',
            'append': ''
        },
        'LYD': {
            'description': 'Libya Dinar',
            'append': ''
        },
        'LTL': {
            'description': 'Lithuania Litas',
            'append': '(EURO)'
        },
        'LUF': {
            'description': 'Luxembourg Franc',
            'append': '(EURO)'
        },
        'MOP': {
            'description': 'Macau Pataca',
            'append': ''
        },
        'MKD': {
            'description': 'Macedonia Denar',
            'append': ''
        },
        'MGA': {
            'description': 'Malagasy Ariary',
            'append': ''
        },
        'MWK': {
            'description': 'Malawi Kwacha',
            'append': ''
        },
        'MYR': {
            'description': 'Malaysia Ringgit',
            'append': ''
        },
        'MVR': {
            'description': 'Maldives Rufiyaa',
            'append': ''
        },
        'MTL': {
            'description': 'Malta Lira',
            'append': '(EURO)'
        },
        'MRO': {
            'description': 'Mauritania Ouguiya',
            'append': ''
        },
        'MUR': {
            'description': 'Mauritius Rupee',
            'append': ''
        },
        'MXN': {
            'description': 'Mexico Peso',
            'append': ''
        },
        'MDL': {
            'description': 'Moldova Leu',
            'append': ''
        },
        'MNT': {
            'description': 'Mongolia Tugrik',
            'append': ''
        },
        'MAD': {
            'description': 'Morocco Dirham',
            'append': ''
        },
        'MZN': {
            'description': 'Mozambique New Metical',
            'append': ''
        },
        'MMK': {
            'description': 'Myanmar Kyat',
            'append': ''
        },
        'ANG': {
            'description': 'NL Antilles Guilder',
            'append': ''
        },
        'NAD': {
            'description': 'Namibia Dollar',
            'append': ''
        },
        'NPR': {
            'description': 'Nepal Rupee',
            'append': ''
        },
        'NLG': {
            'description': 'Netherlands Guilder',
            'append': '(EURO)'
        },
        'NZD': {
            'description': 'New Zealand Dollar',
            'append': ''
        },
        'NIO': {
            'description': 'Nicaragua Cordoba Oro',
            'append': ''
        },
        'NGN': {
            'description': 'Nigeria Naira',
            'append': ''
        },
        'KPW': {
            'description': 'North Korea Won',
            'append': ''
        },
        'NOK': {
            'description': 'Norway Kroner',
            'append': ''
        },
        'OMR': {
            'description': 'Oman Rial',
            'append': ''
        },
        'PKR': {
            'description': 'Pakistan Rupee',
            'append': ''
        },
        'PAB': {
            'description': 'Panama Balboa',
            'append': ''
        },
        'PGK': {
            'description': 'Papua New Guinea Kina',
            'append': ''
        },
        'PYG': {
            'description': 'Paraguay Guarani',
            'append': ''
        },
        'PEN': {
            'description': 'Peru Nuevo Sol',
            'append': ''
        },
        'PHP': {
            'description': 'Philippines Peso',
            'append': ''
        },
        'PLN': {
            'description': 'Poland Zloty',
            'append': ''
        },
        'PTE': {
            'description': 'Portugal Escudo',
            'append': '(EURO)'
        },
        'QAR': {
            'description': 'Qatar Rial',
            'append': ''
        },
        'RON': {
            'description': 'Romania New Lei',
            'append': ''
        },
        'RUB': {
            'description': 'Russia Rouble',
            'append': ''
        },
        'RWF': {
            'description': 'Rwanda Franc',
            'append': ''
        },
        'WST': {
            'description': 'Samoa Tala',
            'append': ''
        },
        'STD': {
            'description': 'Sao Tome/Principe Dobra',
            'append': ''
        },
        'SAR': {
            'description': 'Saudi Arabia Riyal',
            'append': ''
        },
        'RSD': {
            'description': 'Serbia Dinar',
            'append': ''
        },
        'SCR': {
            'description': 'Seychelles Rupee',
            'append': ''
        },
        'SLL': {
            'description': 'Sierra Leone Leone',
            'append': ''
        },
        'SGD': {
            'description': 'Singapore Dollar',
            'append': ''
        },
        'SKK': {
            'description': 'Slovakia Koruna',
            'append': '(EURO)'
        },
        'SIT': {
            'description': 'Slovenia Tolar',
            'append': '(EURO)'
        },
        'SBD': {
            'description': 'Solomon Islands Dollar',
            'append': ''
        },
        'SOS': {
            'description': 'Somali Shilling',
            'append': ''
        },
        'ZAR': {
            'description': 'South Africa Rand',
            'append': ''
        },
        'KRW': {
            'description': 'South Korea Won',
            'append': ''
        },
        'ESP': {
            'description': 'Spain Peseta',
            'append': '(EURO)'
        },
        'LKR': {
            'description': 'Sri Lanka Rupee',
            'append': ''
        },
        'SHP': {
            'description': 'St Helena Pound',
            'append': ''
        },
        'SDG': {
            'description': 'Sudan Pound',
            'append': ''
        },
        'SRD': {
            'description': 'Suriname Dollar',
            'append': ''
        },
        'SZL': {
            'description': 'Swaziland Lilangeni',
            'append': ''
        },
        'SEK': {
            'description': 'Sweden Krona',
            'append': ''
        },
        'CHF': {
            'description': 'Switzerland Franc',
            'append': '',
            'baseScore': 0,
            'compareScore': 0
        },
        'SYP': {
            'description': 'Syria Pound',
            'append': ''
        },
        'TWD': {
            'description': 'Taiwan Dollar',
            'append': ''
        },
        'TZS': {
            'description': 'Tanzania Shilling',
            'append': ''
        },
        'THB': {
            'description': 'Thailand Baht',
            'append': ''
        },
        'TOP': {
            'description': 'Tonga Pa\'anga',
            'append': ''
        },
        'TTD': {
            'description': 'Trinidad/Tobago Dollar',
            'append': ''
        },
        'TND': {
            'description': 'Tunisia Dinar',
            'append': ''
        },
        'TRY': {
            'description': 'Turkish New Lira',
            'append': ''
        },
        'TMM': {
            'description': 'Turkmenistan Manat',
            'append': ''
        },
        'USD': {
            'description': 'USA Dollar',
            'append': '',
            'baseScore': 0,
            'compareScore': 0
        },
        'UGX': {
            'description': 'Uganda Shilling',
            'append': ''
        },
        'UAH': {
            'description': 'Ukraine Hryvnia',
            'append': ''
        },
        'UYU': {
            'description': 'Uruguay Peso',
            'append': ''
        },
        'AED': {
            'description': 'United Arab Emirates Dirham',
            'append': ''
        },
        'VUV': {
            'description': 'Vanuatu Vatu',
            'append': ''
        },
        'VEB': {
            'description': 'Venezuela Bolivar',
            'append': ''
        },
        'VND': {
            'description': 'Vietnam Dong',
            'append': ''
        },
        'YER': {
            'description': 'Yemen Rial',
            'append': ''
        },
        'ZMK': {
            'description': 'Zambia Kwacha',
            'append': ''
        },
        'ZWD': {
            'description': 'Zimbabwe Dollar',
            'append': ''
        }
    };

/*
 Country/Currency	Acronym/Abbreviation
 Australia Dollar	AUD
 Great Britain Pound	GBP
 Euro	EUR
 Japan Yen	JPY
 Switzerland Franc	CHF
 USA Dollar	USD
 Afghanistan Afghani	AFN
 Albania Lek	ALL
 Algeria Dinar	DZD
 Angola Kwanza	AOA
 Argentina Peso	ARS
 Armenia Dram	AMD
 Aruba Florin	AWG
 Australia Dollar	AUD
 Austria Schilling	ATS (EURO)
 Belgium Franc	BEF (EURO)
 Azerbaijan New Manat	AZN
 Bahamas Dollar	BSD
 Bahrain Dinar	BHD
 Bangladesh Taka	BDT
 Barbados Dollar	BBD
 Belarus Ruble	BYR
 Belize Dollar	BZD
 Bermuda Dollar	BMD
 Bhutan Ngultrum	BTN
 Bolivia Boliviano	BOB
 Bosnia Mark	BAM
 Botswana Pula	BWP
 Brazil Real	BRL
 Great Britain Pound	GBP
 Brunei Dollar	BND
 Bulgaria Lev	BGN
 Burundi Franc	BIF
 CFA Franc BCEAO	XOF
 CFA Franc BEAC	XAF
 CFP Franc	XPF
 Cambodia Riel	KHR
 Canada Dollar	CAD
 Cape Verde Escudo	CVE
 Cayman Islands Dollar	KYD
 Chili Peso	CLP
 China Yuan/Renminbi	CNY
 Colombia Peso	COP
 Comoros Franc	KMF
 Congo Franc	CDF
 Costa Rica Colon	CRC
 Croatia Kuna	HRK
 Cuba Convertible Peso	CUC
 Cuba Peso	CUP
 Cyprus Pound	CYP (EURO)
 Czech Koruna	CZK
 Denmark Krone	DKK
 Djibouti Franc	DJF
 Dominican Republich Peso	DOP
 East Caribbean Dollar	XCD
 Egypt Pound	EGP
 El Salvador Colon	SVC
 Estonia Kroon	EEK (EURO)
 Ethiopia Birr	ETB
 Euro	EUR
 Falkland Islands Pound	FKP
 Finland Markka	FIM (EURO)
 Fiji Dollar	FJD
 Gambia Dalasi	GMD
 Georgia Lari	GEL
 Germany Mark	DMK (EURO)
 Ghana New Cedi	GHS
 Gibraltar Pound	GIP
 Greece Drachma	GRD (EURO)
 Guatemala Quetzal	GTQ
 Guinea Franc	GNF
 Guyana Dollar	GYD
 Haiti Gourde	HTG
 Honduras Lempira	HNL
 Hong Kong Dollar	HKD
 Hungary Forint	HUF
 Iceland Krona	ISK
 India Rupee	INR
 Indonesia Rupiah	IDR
 Iran Rial	IRR
 Iraq Dinar	IQD
 Ireland Pound	IED (EURO)
 Israel New Shekel	ILS
 Italy Lira	ITL (EURO)
 Jamaica Dollar	JMD
 Japan Yen	JPY
 Jordan Dinar	JOD
 Kazakhstan Tenge	KZT
 Kenya Shilling	KES
 Kuwait Dinar	KWD
 Kyrgyzstan Som	KGS
 Laos Kip	LAK
 Latvia Lats	LVL (EURO)
 Lebanon Pound	LBP
 Lesotho Loti	LSL
 Liberia Dollar	LRD
 Libya Dinar	LYD
 Lithuania Litas	LTL (EURO)
 Luxembourg Franc	LUF (EURO)
 Macau Pataca	MOP
 Macedonia Denar	MKD
 Malagasy Ariary	MGA
 Malawi Kwacha	MWK
 Malaysia Ringgit	MYR
 Maldives Rufiyaa	MVR
 Malta Lira	MTL (EURO)
 Mauritania Ouguiya	MRO
 Mauritius Rupee	MUR
 Mexico Peso	MXN
 Moldova Leu	MDL
 Mongolia Tugrik	MNT
 Morocco Dirham	MAD
 Mozambique New Metical	MZN
 Myanmar Kyat	MMK
 NL Antilles Guilder	ANG
 Namibia Dollar	NAD
 Nepal Rupee	NPR
 Netherlands Guilder	NLG (EURO)
 New Zealand Dollar	NZD
 Nicaragua Cordoba Oro	NIO
 Nigeria Naira	NGN
 North Korea Won	KPW
 Norway Kroner	NOK
 Oman Rial	OMR
 Pakistan Rupee	PKR
 Panama Balboa	PAB
 Papua New Guinea Kina	PGK
 Paraguay Guarani	PYG
 Peru Nuevo Sol	PEN
 Philippines Peso	PHP
 Poland Zloty	PLN
 Portugal Escudo	PTE (EURO)
 Qatar Rial	QAR
 Romania New Lei	RON
 Russia Rouble	RUB
 Rwanda Franc	RWF
 Samoa Tala	WST
 Sao Tome/Principe Dobra	STD
 Saudi Arabia Riyal	SAR
 Serbia Dinar	RSD
 Seychelles Rupee	SCR
 Sierra Leone Leone	SLL
 Singapore Dollar	SGD
 Slovakia Koruna	SKK (EURO)
 Slovenia Tolar	SIT (EURO)
 Solomon Islands Dollar	SBD
 Somali Shilling	SOS
 South Africa Rand	ZAR
 South Korea Won	KRW
 Spain Peseta	ESP (EURO)
 Sri Lanka Rupee	LKR
 St Helena Pound	SHP
 Sudan Pound	SDG
 Suriname Dollar	SRD
 Swaziland Lilangeni	SZL
 Sweden Krona	SEK
 Switzerland Franc	CHF
 Syria Pound	SYP
 Taiwan Dollar	TWD
 Tanzania Shilling	TZS
 Thailand Baht	THB
 Tonga Pa'anga	TOP
 Trinidad/Tobago Dollar	TTD
 Tunisia Dinar	TND
 Turkish New Lira	TRY
 Turkmenistan Manat	TMM
 USA Dollar	USD
 Uganda Shilling	UGX
 Ukraine Hryvnia	UAH
 Uruguay Peso	UYU
 United Arab Emirates Dirham	AED
 Vanuatu Vatu	VUV
 Venezuela Bolivar	VEB
 Vietnam Dong	VND
 Yemen Rial	YER
 Zambia Kwacha	ZMK
 Zimbabwe Dollar	ZWD
 */