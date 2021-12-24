// js crap
var htmlOutputAll = '';
var htmlOutput = '';

// style crap
function imlazycopytheheader()
{
	var buttonAll = '<button type="button" id="tab-achievements" class="tabbed-content__tab button-link pseudo-after" role="tab" aria-selected="false" onclick="var evt = document.createEvent(\'Event\'); evt.initEvent(\'showAll\', true, false);document.dispatchEvent(evt);">All</button>';
	var buttonInc = '<button type="button" id="tab-achievements" class="tabbed-content__tab button-link pseudo-after" role="tab" aria-selected="false" onclick="var evt = document.createEvent(\'Event\'); evt.initEvent(\'showIncomplete\', true, false);document.dispatchEvent(evt);">Incomplete</button>';
	
	// header + togglers
	var header = '<div class="profile-separator-container"><div class="profile-separator variant-small-caps"><h2 class="profile-separator__title">Your Better Reputation</h2>';
	header += buttonAll + buttonInc;
	header += '<div class="profile-separator__separator" aria-hidden="true"><div class="profile-separator__left"></div><div class="profile-separator__center"><i class="icon icon--reputation"><svg aria-hidden="true" role="presentation" width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M48.0998 16.5738C46.8916 15.9105 45.6752 15.2638 44.4754 14.5922C44.2171 14.4513 43.7922 14.2357 43.2506 13.8958C42.809 13.6222 42.9423 13.7465 42.6757 13.5475C42.6674 13.5393 42.659 13.5393 42.6507 13.5393C42.5174 13.5393 42.2258 15.5871 42.1008 16.3665C41.9342 17.3863 41.5342 19.857 41.0926 19.8653C40.701 19.8653 40.0261 17.9418 40.1011 15.9105C40.1428 14.7 40.5094 11.7484 39.9928 11.309C39.9928 11.309 39.6345 11.0022 39.6512 10.9773C39.6595 10.969 39.7012 11.0022 39.6428 10.9442C38.3181 9.56785 37.1016 8.07547 35.7268 6.76548C33.7771 4.90829 31.9691 2.88528 30.0527 0.986633C29.2195 0.15753 28.6946 0.315059 28.453 1.45922C28.2864 2.27174 28.3114 3.12572 28.2531 3.91337C27.4032 4.06261 26.5366 4.19526 25.6701 4.36108C23.4538 4.80051 21.2541 5.98613 19.0962 4.05432C18.313 3.34958 17.2548 2.94332 16.3217 2.4044C16.5716 1.9401 16.8299 1.64992 16.8799 1.32657C16.9465 0.895432 16.8549 0.439425 16.8216 0C16.4466 0.0331641 16.0384 0 15.6968 0.132657C15.2302 0.306768 14.7719 0.555499 14.372 0.862267C13.0722 1.86548 13.0389 2.18883 11.6807 3.09256C11.3808 3.29154 10.9475 3.66464 10.6726 3.8802C10.4143 4.08748 9.57276 16.6816 8.41462 10.1482C8.36463 9.86633 7.06479 7.28782 6.85649 7.49509C5.64003 8.73046 6.04 8.42369 5.0235 9.83317C3.81536 11.508 2.83215 13.3734 1.44071 14.8824C0.424208 15.9851 -0.0673578 16.9469 0.315913 18.4061C0.707516 19.8985 1.20743 21.2002 2.81551 21.8386C3.96532 22.2946 4.98181 23.0905 6.13996 23.5051C7.25644 23.903 7.77302 24.0274 9.05615 23.787C9.38109 23.0739 9.78937 22.1951 10.8892 22.1205C11.0558 22.1122 11.5891 21.6064 11.6641 21.366C12.064 20.0809 12.164 19.3927 12.7639 18.2154C13.2221 17.3117 14.0387 16.2007 14.9135 15.9519C18.0547 15.0565 21.3041 14.6917 24.5703 15.4047C27.3198 16.0017 29.6445 17.1956 30.9359 19.8487C31.4275 20.8519 31.4275 20.9514 31.9358 21.9464C32.0608 22.1951 33.1106 22.875 33.3855 22.9164C34.7853 23.1237 35.7935 22.7257 36.3017 24.3342C36.3434 24.4668 37.3182 25.6773 37.4599 25.6525C38.918 25.3954 39.7595 25.3208 41.1759 24.898C42.3424 24.5497 43.3672 23.7289 44.5337 23.4056C46.8417 22.7589 48.3414 21.3909 49.083 19.1523C49.5329 17.9086 49.2746 17.2205 48.0998 16.5738Z" fill="#85816E"></path><path d="M37.6015 41.0404C36.7433 40.6093 36.2434 40.0289 35.8018 39.2662C35.5685 38.8682 35.3018 38.4453 34.9519 38.1552C33.7771 37.21 33.0522 36.0824 33.0522 34.5154C33.0522 34.192 32.7356 33.877 32.5106 33.5536C32.4523 33.4707 32.3523 33.4376 32.2523 33.4707C32.1607 33.4956 32.1024 33.5702 32.0857 33.6614C32.044 34.0262 32.0107 34.391 31.9274 34.7392C31.5358 36.3809 30.7442 37.6826 28.9612 38.1552C27.7447 38.4785 27.2615 39.3491 27.2198 40.5678C27.1865 41.5213 27.0948 42.6074 26.6199 43.3868C25.5201 45.1694 24.187 46.811 22.9038 48.5521C22.8372 48.6433 22.8455 48.7677 22.9205 48.8506C23.0038 48.9335 23.0955 49.0164 23.1705 49.0081C27.5947 48.1541 32.019 47.2753 36.5433 46.3716C36.7016 46.3384 35.7851 45.8244 35.6518 45.7249C34.677 44.9953 34.8769 44.9538 33.8188 43.9506C33.5521 43.7019 32.8522 43.5195 32.4523 43.1132C32.119 42.765 30.9942 41.1565 31.0442 41.0736C31.4025 40.543 33.7604 42.0602 33.8604 42.1266C34.2187 42.3504 33.7521 42.4748 34.9103 42.7815C36.31 43.1546 36.7766 44.3817 38.0097 45.2606C38.5596 45.6502 38.7096 45.7166 39.0679 45.3601C39.2595 45.1694 39.6178 44.7797 39.5678 44.531C39.3178 43.1546 38.9429 41.712 37.6015 41.0404Z" fill="#85816E"></path><path d="M24.2704 40.8003C23.5456 40.7008 22.7957 40.5765 22.0791 40.6345C20.2711 40.7838 18.5131 40.8418 16.8717 39.8717C16.5634 39.6893 16.1468 39.6893 15.6719 39.5898C15.8552 40.1453 15.9802 40.5931 16.1551 41.0159C16.7884 42.5332 17.0883 44.1914 18.2381 45.4848C18.6714 45.9739 18.988 46.5709 19.3546 47.1181C19.5046 47.2508 19.6462 47.3834 19.7962 47.5161C20.0545 47.7565 20.0212 47.7731 20.3794 48.113C20.8294 47.6487 21.1293 46.9772 21.6042 46.5626C23.1623 45.178 23.8372 44.2162 24.2955 42.243C24.4121 41.7372 24.8703 40.8832 24.2704 40.8003Z" fill="#85816E"></path><path d="M15.6216 45.3435C14.4301 43.3868 13.4636 41.2808 12.4804 39.2081C11.6556 37.4753 11.5723 38.3624 12.2305 36.1072C12.4888 35.0294 12.6388 34.3247 12.9637 34.648C14.2552 35.9165 15.4133 37.0939 17.563 37.1685C20.5791 37.2763 23.5953 36.7208 26.6365 37.525C28.4362 37.9976 30.1776 37.0441 30.9608 35.0957C31.3857 34.0345 31.544 32.8489 31.669 31.7047C31.7273 31.1658 31.8689 30.602 32.0356 30.0133C32.0522 30.2952 32.0772 30.5771 32.1272 30.8673C32.1772 31.199 32.6355 31.5969 32.9854 31.7047C33.1937 31.7627 33.627 31.3565 33.8353 31.0746C34.5018 30.1709 35.1268 29.2257 35.7433 28.2888C36.3349 27.3851 36.3266 26.4067 35.8016 25.5113C35.585 25.1382 35.1184 24.8978 34.6602 24.5744C34.5602 24.5081 34.4352 24.4915 34.3185 24.533C33.9603 24.6905 33.7103 24.6822 33.5437 24.8314C33.4853 24.8812 33.4103 24.9143 33.327 24.9143C32.7271 24.9226 32.3272 24.8231 32.0356 24.649C31.9689 24.6076 31.8856 24.5993 31.8106 24.6159C31.4357 24.6905 30.9441 24.6905 30.8191 24.9061C30.2025 25.9756 29.3777 27.0866 29.286 28.2391C29.1944 29.3998 28.6445 29.9138 27.9446 30.403C27.778 30.5191 27.5363 30.461 27.4447 30.2704C26.8698 29.1179 26.3199 28.0235 25.7866 26.9208C25.2367 25.7766 23.2453 24.6905 22.0622 25.1465C20.7291 25.6523 19.5293 25.5942 18.2045 25.1299C16.4965 24.533 16.5048 24.6407 15.4549 26.1331C15.005 26.7715 14.4552 27.3519 13.8802 27.9903C13.6969 28.1976 13.347 28.1064 13.297 27.8328C13.0804 26.7633 12.9471 26.216 12.6804 24.79C12.5305 24.4832 12.5804 24.0023 11.8222 23.7951C11.3723 23.6375 11.1057 23.7453 10.814 23.9775C10.789 24.0023 10.7641 24.0272 10.7391 24.0521C10.3475 24.4169 10.2725 24.4501 10.0559 24.8314C10.0225 24.8895 9.95585 24.9309 9.93919 24.9973C9.36428 27.0369 9.59759 28.5375 10.2142 30.5025C10.2642 30.66 10.5641 30.8341 10.7391 30.8341C10.8974 30.8259 11.1307 30.6103 11.1806 30.4362L11.6139 32.567C11.5973 32.7494 11.439 32.882 11.2557 32.8737C11.1473 32.8655 11.0557 32.8737 11.0307 32.9152C9.83087 35.3611 7.76458 37.3841 7.21467 40.0289C7.18134 40.203 7.29799 40.3854 7.47296 40.4186C8.2395 40.5761 8.92272 40.6507 9.60594 40.8083C13.5636 41.7037 12.1638 42.11 11.3473 42.1431L8.76441 42.1929C8.43113 42.1763 8.17285 42.425 8.36449 42.6986C9.73926 44.6802 14.6135 47.9385 17.413 48.9501C17.8129 48.2785 17.7296 48.4277 18.1295 47.7561C18.1212 47.7561 18.1212 47.7479 18.1128 47.7479C17.2797 46.9602 16.2048 46.3052 15.6216 45.3435ZM15.7882 28.1893C17.313 28.1893 18.7461 28.1976 20.1709 28.181C20.4792 28.181 20.7958 28.0235 21.0957 28.0649C21.6873 28.1313 22.2705 28.2639 22.8537 28.3966C23.4703 28.5375 24.1619 28.9438 24.6868 28.7946C25.5033 28.5624 25.7616 28.8194 25.6366 29.3335C25.3034 29.8226 25.0117 30.3367 24.6285 30.7761C24.3785 31.0663 23.9286 31.3979 23.712 31.4311C22.2872 31.6632 22.0372 30.6766 19.7959 30.6269L17.563 31.4145C17.413 31.4477 16.1132 31.3316 16.0798 31.1824C15.8799 30.3616 15.6799 29.5407 15.4549 28.6039C15.405 28.3883 15.5716 28.1893 15.7882 28.1893Z" fill="#85816E"></path></svg></i></div><div class="profile-separator__right"></div></div></div></div>';
	
	// List bootstrap
	header += '<div class="profile-achievements-container">';
	header += '<table>';
	return header;
}

function footer()
{
	return '</table></div>';	
}

function writeCompanyHeader( company, node )
{
	var level = ''
	if( node.hasOwnProperty('Level') )
		level = ' (' + node['Level'] + ')';
	var companyHeader = '<tr><td colspan="4" style="padding-bottom: 20px; padding-top: 20px;"><div class="achievement__title">'+company+level+'</div></td>';
	companyHeader += '</tr>';
	return companyHeader;
}

function writeCampaignHeader( campaign, node )
{
	var campaignHeader = '<tr style="border-bottom: 1px solid yellowgreen; border-top: 1px solid yellowgreen;"><td colspan="4" style="padding-top: 5px;"><div class="achievement__description">'+campaign+'</div></td>';
	campaignHeader += '</tr>';
	return campaignHeader;
}

function writeEmblem( node, highlightFinished )
{
	var emblem = '';
	
	var incomplete = node["Taxonomy"]['Tags'][1]["#Value"] != "complete";
	if (incomplete || highlightFinished)
	{
		var colorBG = '';
		if (!incomplete)
			colorBG = 'style="background-color:#145A32"'; // lime green on finished
			
		// image, name, grade in parenthesis, desc, progress
		emblem += '<tr padding-top="0"'+colorBG+'><td><img vertical-align="sub" src="'+node['image']+'" width="20" height="20"></td>';
		var gradeProg = node['MaxGrade'] == '1' ? 'Complete Once' : 'Grade: ' + node["Grade"] + '/' + node['MaxGrade'];
		emblem += '<td><div class="achievement__unlocked">'+node['DisplayName']+' ('+gradeProg+')</div></td>';
		
	    emblem += '<td><div class="achievement__unlocked">'+ node["Description"]+'</div></td>';
		
		var progress = node['HasScalar'] ? 'Grade Progress: '+ node["Value"] + '/' + node["Threshold"] : "Do Once!";
		emblem += '<td><div class="achievement__unlocked">'+progress+'</div></td></tr>';
	}
	return emblem;
}

// parsing crap
function parse(data, highlightCompleted)
{
    var processedData = imlazycopytheheader();
	
	var companyOrdered = ["ReapersBones", "GoldHoarders", "OrderOfSouls", "MerchantAlliance", "AthenasFortune", "HuntersCall", "SeaDogs", "BilgeRats", "TallTales", "CreatorCrew", ];
	for (var index in companyOrdered) // order companies more funly
	{		
	    var company = companyOrdered[index];
		var emblemHTML = '';
		var campaignHTML = '';
		var companyHTML = writeCompanyHeader(company, data[company]);
		
		if ('Campaigns' in data[company]) // multilevel company
		{
			for (var campaign in data[company]['Campaigns'])
			{
				var curCampaignHTML = writeCampaignHeader(campaign, data[company]['Campaigns'][campaign]);
				var innerEmblemHTML = ''
				for (var emblem in data[company]['Campaigns'][campaign]['Emblems'])
				{
					innerEmblemHTML += writeEmblem(data[company]['Campaigns'][campaign]['Emblems'][emblem], highlightCompleted);
				}
				
				// if empty emblems ; no don't write it
				if (innerEmblemHTML != '')
					campaignHTML += curCampaignHTML + innerEmblemHTML;
			}
		}
		else if ('Emblems' in data[company])
		{			
			for (var emblem in data[company]["Emblems"]["Emblems"])
			{
				emblemHTML += writeEmblem(data[company]["Emblems"]["Emblems"][emblem], highlightCompleted);
			}
		}
		
		// write company in if campain html or emblem html
		if (campaignHTML != '')
			processedData += companyHTML + campaignHTML;
		else if (emblemHTML != '')
			processedData += companyHTML + emblemHTML;
	}
	processedData += footer();
	
	return processedData;
}

// hook crap
async function onLoadFunction()
{
	// Async request data
	fetch("https://www.seaofthieves.com/api/profilev2/reputation")
	.then(response => response.json())
	.then(data =>
	{
		htmlOutputAll = parse(data, true);
		htmlOutput = parse(data, false);
	});
	
	// TODO ; this is a hack. Should register itsef on the cb from the page.
	await new Promise(resolve => setTimeout(resolve, 4000));
	
	// Hide inner dom, use it later.
	var destination = document.getElementsByClassName("profile-v2__container")[0];
	destination.style.display = 'block';
	destination.innerHTML = htmlOutput;

	document.addEventListener('showAll', function() {
		destination.innerHTML = htmlOutputAll;
	});
	document.addEventListener('showIncomplete', function() {
		destination.innerHTML = htmlOutput;
	});
}

window.onload = onLoadFunction();