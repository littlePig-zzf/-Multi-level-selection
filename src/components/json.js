export const licenseScope = [
	{ 
		"code":"A", 
		"value": "一级A",
		"checkAll": false,
		"checkedGroup": [],
		"rows":[
			{"code": "AA", "value": "二级A-1", "isChecked": false},
			{"code": "AB", "value": "二级A-2", "isChecked": false},
			{"code": "AC", "value": "二级A-3", "isChecked": false},
			{"code": "AD", "value": "二级A-4", "isChecked": false}
		]
	},
	{ 
		"code":"B", 
	  	"value": "一级B",
	  	"checkAll": false,
		"checkedGroup": [],
		"rows":[
			{"code": "BA", "value": "二级B-1", "isChecked": false},
			{"code": "BB", "value": "二级B-2", "isChecked": false , "text": '选择类别：', "checkedGroup": [], "rows": [
				{"code": "BBA", "value":"三级B-1"},
				{"code": "BBB", "value":"三级B-2"},
				{"code": "BBC", "value":"三级B-3"}
				]
			},
			{"code": "BC", "value": "二级B-3", "isChecked": false, "text": '选择类别：', "checkedGroup": [], "checked": '', "checkOne": true, "rows": [
				{"code": "BCA", "value": "一类"},
				{"code": "BCB", "value": "二类"},
				{"code": "BCC", "value": "三类"},
				{"code": "BCD", "value": "四类"},
				]
			},
			{"code": "BD", "value": "二级B-4", "isChecked": false, "text": '选择类别：', "checkedGroup": [],"rows": [
				{"code": "BDA", "value": "1类1项"},
				{"code": "BDR", "value": "7类"},
				{"code": "BDS", "value": "8类"},
				{"code": "BDT", "value": "9类"}
				]
			},
			{"code": "BE", "value": "二级B-5", "isChecked": false, "text": '选择类别：', "checkedGroup": [],"rows":[
				{"code": "BEA", "value": "1类1项"},
				{"code": "BEB", "value": "1类2项"},
				{"code": "BEC", "value": "1类3项"},
				{"code": "BED", "value": "1类4项"}
				]
			}
		]
	},
	{"code":"C",
	"value":"一级C",
	"checkAll": false,
	"checkedGroup": [],
	"rows":[
		{"code":"CA","value":"二级C-1", "isChecked": false},
		{"code":"CB","value":"二级C-2", "isChecked": false},
		{"code":"CC","value":"二级C-3", "isChecked": false},
		{"code":"CD","value":"二级C-4", "isChecked": false},
		]
	},
	{"code":"D","value":"一级D",
	"checkedGroup": [],
	"checkAll": false,"rows":[
		{"code":"DA","value":"二级D-1", "isChecked": false},
		{"code":"DB","value":"二级D-2", "isChecked": false},
		]
	},
	{"code":"E","value":"一级E",
	"checkedGroup": [],
	"checkAll": false,"rows":[
		{"code":"EA","value":"二级E-1", "isChecked": false, "text": '选择类别：', "checkedGroup": [],"rows":[
			{"code":"EAA","value":"三级E-1"},
			{"code":"EAB","value":"三级E-2"},
			{"code":"EAC","value":"三级E-3"},
			{"code":"EAD","value":"三级E-4"},
			]
		},
		{"code":"EB","value":"二级E-2",
		"isChecked": false,
		 "text": '选择类别：',
		"checkedGroup": [],"rows":[
			{"code":"EBA","value":"三级E-1"},
			{"code":"EBB","value":"三级E-2"},
			{"code":"EBC","value":"三级E-3"},
			]
		},
		{"code":"EC","value":"二级E-3",
		"isChecked": false,
		 "text": '选择类别：',
		"checkedGroup": [],"rows":[
			{"code":"ECA","value":"三级E"},
			{"code":"ECB","value":"三级E"},
			{"code":"ECC","value":"三级E"},
			{"code":"ECD","value":"三级E"},
			{"code":"ECE","value":"三级E"},
			]
		},
		{"code":"ED","value":"二级E-4","isShowOtherBussinessType": false,
		"isChecked": false,
		"hasInput": true,
		"checkedGroup": [],"rows":[
			{"code":"EDA","value":""},
			]
		}
		]
	},
	{"code":"F","value":"一级F","checkAll": false,
	"checkedGroup": [],
	"rows":[
		{"code":"FA","value":"二级F-1","isChecked": false,
		"text": '选择类别：',
		 "checkedGroup": [], "rows":[
			{"code":"FAA","value":"C1"},
			{"code":"FAB","value":"C2"},
			{"code":"FAC","value":"C3"}
			]
		},
		{"code":"FB","value":"二级F-2","isChecked": false,
		"checkOne": true,
		"checked": '',
		"text": '选择类别：',
		"checkedGroup": [],"rows":[
			{"code":"FBA","value":"C1"},
			{"code":"FBB","value":"C2"},
			{"code":"FBC","value":"C3"},
			{"code":"FBD","value":"C4"},
			{"code":"FBE","value":"B1"},
			{"code":"FBF","value":"B2"},
			{"code":"FBG","value":"A1"},
			{"code":"FBH","value":"A2"},
			{"code":"FBI","value":"A3"},
			{"code":"FBJ","value":"D"},
			{"code":"FBK","value":"E"},
			{"code":"FBL","value":"F"},
			{"code":"FBM","value":"M"},
			{"code":"FBN","value":"N"},
			{"code":"FBO","value":"P"},
			]
		},
		{"code":"FC","value":"二级F-3","isChecked": false,
		"text": '选择类别：',
		"checkedGroup": [],"rows":[
			{"code":"FCA","value":"三级F"},
			{"code":"FCB","value":"三级F"},
			{"code":"FCC","value":"三级F"},
			]
		}
		]
	}
];
