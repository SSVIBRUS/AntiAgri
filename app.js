/* ==========================================================================
   AGROLOOP — COMPLETE APPLICATION LOGIC
   Login/Registration, i18n (21 Languages), Dark/Light Theme,
   Waste Listing, Pre-Harvest Predictor, Carbon Calculator, Community,
   Live Bidding, Leaderboard, Peer Chat, Proof Ledger, Bank Receipt
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // =====================================================================
    // STATE
    // =====================================================================
    let currentLang = localStorage.getItem('agroloop-lang') || 'en';
    let isDarkTheme = localStorage.getItem('agroloop-theme') === 'dark';
    let userData = null;

    // =====================================================================
    // COMPLETE TRANSLATIONS (all visible text)
    // =====================================================================
    const T = {
        en: {
            // Login
            appName: "AgroLoop", loginTagline: "Sell Farm Waste • Earn Money • Save Earth",
            fullNameLabel: "Full Name", fullNamePlaceholder: "Enter your full name",
            contactLabel: "Mobile Number or Email", contactPlaceholder: "e.g. 9876543210 or name@email.com",
            locationLabel: "Village / City / Town", locationPlaceholder: "e.g. Nashik, Sinnar, Deola",
            sendOtpBtn: "Send OTP →", chooseLangLabel: "Choose Language:",
            otpTitle: "Verify OTP", otpSubtitle: "We sent a 4-digit code to your number/email",
            enterOtpLabel: "Enter OTP", otpPlaceholder: "● ● ● ●",
            verifyBtn: "Verify & Start →", resendOtp: "Resend OTP", changeDetails: "← Change Details",
            // Top bar
            badgeTag: "Farmer Hub", darkMode: "Dark Mode", lightMode: "Light Mode", logoutBtn: "Logout",
            mobileView: "Mobile View", desktopView: "Desktop View",
            // App header
            greetingSub: "Welcome back,",
            // Section titles
            sec1Title: "📊 My Farm Dashboard", sec2Title: "💰 Sell Waste & Earn",
            sec3Title: "📅 Plan Ahead — Pre-Harvest", sec4Title: "🤝 My Community",
            // AgroScore
            agroScoreLabel: "YOUR AGROSCORE",
            agroScoreStatus: "🌟 Start selling waste to increase your score!",
            wasteSoldLabel: "Waste Sold", totalEarnedLabel: "Total Earned", co2SavedLabel: "CO₂ Saved",
            // 6-Step Cycle
            cycleActionsTitle: "🔄 6-Step AgroLoop Cycle",
            cycleCollect: "Collect & Sell", cycleCollectDesc: "List your waste",
            cycleRecover: "Recover & Store", cycleRecoverDesc: "Safe storage tips",
            cycleLearn: "Learn & Act", cycleLearnDesc: "Watch tutorials",
            cycleMonitor: "Monitor Earnings", cycleMonitorDesc: "Track your income",
            cycleProve: "Prove Impact", cycleProveDesc: "Carbon certificates",
            cyclePlan: "Pre-Harvest", cyclePlanDesc: "Book buyers early",
            // Monthly Earnings
            monthlyEarningsTitle: "💰 Monthly Earnings Summary",
            directWasteSales: "Direct Waste Sales", carbonCreditsEarned: "Carbon Credits",
            totalExtraIncome: "Total Extra Income",
            // Active Listing Preview
            activeListingTitle: "🌾 Active Listing", viewBidsBtn: "View Bids →",
            // How it works
            howItWorksTitle: "🚀 How It Works — 3 Easy Steps",
            step1Name: "List Your Waste", step1Desc: "Tell us what crop waste you have",
            step2Name: "Get Best Price", step2Desc: "Buyers bid for your waste",
            step3Name: "Get Paid to Bank", step3Desc: "Money goes directly to your account",
            // Sell
            sellWasteBtn: "Sell My Farm Waste Now",
            sellWasteSub: "List sugarcane, rice straw, corn stalks, or manure",
            listNewWasteBanner: "List New Waste in 30 Seconds",
            listNewWasteDesc: "Sugarcane, rice straw, corn stalks, or manure",
            myListingsTitle: "📋 My Active Listings",
            noListingsMsg: "You have no active listings yet.",
            addFirstListing: "+ Add Your First Listing",
            // Live Bidding
            liveBiddingTitle: "⚡ Live Bidding Stream", liveLabel: "LIVE",
            noBidsYet: "List waste to receive live bids from buyers!",
            acceptBid: "Accept ₹", bidAccepted: "✅ Bid accepted! Payment processing...",
            // Market prices
            marketPricesTitle: "📊 Today's Waste Market Prices",
            sugarcaneBagasse: "Sugarcane Bagasse", riceStraw: "Rice Straw",
            cornStalks: "Corn Stalks", cattleManure: "Cattle Manure",
            perTon: "ton", steady: "Steady",
            // Pre-Harvest
            predictorTitle: "🔮 Waste Predictor", lockBuyersEarly: "Book Buyers Early",
            predictorIntro: "Enter your harvest details. We will calculate how much waste you will get and find a buyer for you before harvest!",
            cropTypeLabel: "Crop Type", harvestDateLabel: "Expected Harvest Date",
            harvestQtyLabel: "Estimated Harvest (Bags / Tons)", harvestQtyPlaceholder: "e.g. 100 bags",
            calculateBtn: "Calculate Waste & Find Buyer",
            predictionResult: "🎉 Prediction Result",
            estimatedWaste: "Estimated Waste", matchedBuyer: "Matched Buyer", expectedPrice: "Expected Price",
            cropRice: "Rice / Paddy Straw", cropSugarcane: "Sugarcane Bagasse",
            cropCorn: "Corn / Maize Stalks", cropWheat: "Wheat Straw",
            // Carbon
            carbonCalcTitle: "🌍 Carbon Credit Calculator",
            carbonCalcDesc: "Every ton of waste you sell (instead of burning) earns you carbon credits = extra money!",
            tonsNotBurned: "Tons of waste NOT burned:", tons: "Tons",
            creditsEarned: "Credits Earned", extraMoney: "Extra Money", co2Prevented: "CO₂ Prevented",
            // Proof Ledger
            proofLedgerTitle: "📋 Permanent Proof Ledger", gpsVerified: "GPS Verified",
            noProofYet: "Complete a sale to generate verified proof records.",
            exportBankProof: "Export Bank Proof Receipt",
            // Bank Receipt
            bankReceiptTitle: "🏦 AgroLoop Bank Proof Receipt", certifiedDoc: "CERTIFIED DOCUMENT",
            receiptFarmerName: "Farmer Name", receiptLocation: "Location",
            receiptTotalSold: "Total Waste Sold", receiptTotalEarned: "Total Earnings",
            receiptCarbonCredits: "Carbon Credits Earned", receiptCO2Saved: "CO₂ Pollution Prevented",
            receiptDate: "Date Generated", receiptVerified: "GPS Verified • Blockchain Secured",
            printReceipt: "Print / Download Receipt",
            // Community
            villageInfoTitle: "🏘️ My Village Stats",
            farmersJoined: "Farmers Joined", tonsSaved: "Tons Saved", totalVillageEarnings: "Village Earnings",
            // Competition
            districtCompTitle: "🏆 District Village Competition", prizeLabel: "₹50,000 Prize",
            competitionDesc: "Compete with neighboring villages. Top village wins ₹50,000 community water funding!",
            block1Name: "Nashik Block 1", block2Name: "Nashik Block 2", yourBlock: "(Your Block)",
            // Leaderboard
            leaderboardTitle: "🥇 Top Farmers Leaderboard",
            leaderVillage1: "Sinnar Village", leaderVillage2: "Deola Village", leaderVillage3: "Nashik Village",
            // Videos
            videoTutorialsTitle: "🎬 Success Stories & Tutorials",
            videoGeeta: "Farmer Geeta's Story", videoGeetaDesc: "Earned ₹22,500 from sugarcane waste",
            videoRam: "Farmer Ram's Guide", videoRamDesc: "How to list & get best price",
            videoComingSoon: "Video tutorial coming soon! Check back for real farmer success stories.",
            // Peer Chat
            peerChatTitle: "💬 Farmer Peer Chat", onlineLabel: "12 Online",
            chatMsg1: "Got ₹575/ton for bagasse today! 🎉",
            chatMsg2: "Which buyer? I want to sell too!",
            chatMsg3: "BioEnergy Ltd. Very fast pickup.",
            chatPlaceholder: "Type your message...", sendBtn: "Send",
            // Help
            helpTitle: "📞 Need Help?",
            callHelpline: "Call Helpline", whatsappHelp: "WhatsApp Help", watchGuide: "Watch Video Guide",
            recordsTitle: "📋 My Records & Proof",
            noRecordsMsg: "Your sale records will appear here after your first transaction.",
            // Nav
            navDashboard: "Dashboard", navMarketplace: "Sell", navPreHarvest: "Plan", navCommunity: "Community",
            // Modal
            listWasteTitle: "🌾 List Your Farm Waste",
            wasteTypeLabel: "What type of waste?", howMuchLabel: "How much? (Tons)",
            readyDateLabel: "When is it ready?", pickupAddressLabel: "Pickup Address",
            qtyPlaceholder: "e.g. 10", addressPlaceholder: "Farm address for pickup",
            publishListingBtn: "Publish & Get Buyers",
            optSugarcane: "Sugarcane Bagasse", optRice: "Rice Straw",
            optCorn: "Corn Stalks", optWheat: "Wheat Straw", optManure: "Cattle Manure",
            // Toast messages
            toastListed: "Listing published! Buyers will bid soon.",
            toastOtpSent: "OTP sent! (Use any 4 digits to verify)",
            toastWelcome: "Welcome to AgroLoop!",
            toastLogout: "Logged out successfully.",
            // Profile & Notifications
            editProfileTitle: "👨‍🌾 Edit Profile", saveProfileBtn: "Save Changes", profileSaved: "Profile updated successfully!",
            profileMemberSince: "Member Since",
            notificationsTitle: "🔔 Notifications", noNotifsMsg: "No notifications yet.",
            videoSearchPlaceholder: "Search farming videos on YouTube..."
        },
        hi: {
            appName: "एग्रोलूप", loginTagline: "फसल कचरा बेचें • पैसे कमाएं • धरती बचाएं",
            fullNameLabel: "पूरा नाम", fullNamePlaceholder: "अपना पूरा नाम लिखें",
            contactLabel: "मोबाइल नंबर या ईमेल", contactPlaceholder: "जैसे 9876543210 या name@email.com",
            locationLabel: "गाँव / शहर / कस्बा", locationPlaceholder: "जैसे नासिक, सिन्नार, देओला",
            sendOtpBtn: "OTP भेजें →", chooseLangLabel: "भाषा चुनें:",
            otpTitle: "OTP सत्यापन", otpSubtitle: "हमने आपके नंबर/ईमेल पर 4 अंकों का कोड भेजा",
            enterOtpLabel: "OTP दर्ज करें", otpPlaceholder: "● ● ● ●",
            verifyBtn: "सत्यापित करें और शुरू करें →", resendOtp: "OTP दोबारा भेजें", changeDetails: "← विवरण बदलें",
            badgeTag: "किसान हब", darkMode: "डार्क मोड", lightMode: "लाइट मोड", logoutBtn: "लॉगआउट",
            mobileView: "मोबाइल व्यू", desktopView: "डेस्कटॉप व्यू",
            greetingSub: "फिर से स्वागत है,",
            sec1Title: "📊 मेरा खेत डैशबोर्ड", sec2Title: "💰 कचरा बेचें और कमाएं",
            sec3Title: "📅 पहले से योजना बनाएं", sec4Title: "🤝 मेरा समुदाय",
            agroScoreLabel: "आपका एग्रोस्कोर",
            agroScoreStatus: "🌟 अपना स्कोर बढ़ाने के लिए कचरा बेचना शुरू करें!",
            wasteSoldLabel: "कचरा बेचा", totalEarnedLabel: "कुल कमाई", co2SavedLabel: "CO₂ बचत",
            cycleActionsTitle: "🔄 6-चरण एग्रोलूप चक्र",
            cycleCollect: "एकत्र और बेचें", cycleCollectDesc: "कचरा सूचीबद्ध करें",
            cycleRecover: "पुनर्प्राप्त और संग्रहित", cycleRecoverDesc: "सुरक्षित भंडारण",
            cycleLearn: "सीखें और करें", cycleLearnDesc: "ट्यूटोरियल देखें",
            cycleMonitor: "कमाई ट्रैक करें", cycleMonitorDesc: "आय पर नज़र",
            cycleProve: "प्रभाव साबित करें", cycleProveDesc: "कार्बन प्रमाणपत्र",
            cyclePlan: "पूर्व-फसल", cyclePlanDesc: "पहले से खरीदार बुक",
            monthlyEarningsTitle: "💰 मासिक कमाई सारांश",
            directWasteSales: "प्रत्यक्ष कचरा बिक्री", carbonCreditsEarned: "कार्बन क्रेडिट",
            totalExtraIncome: "कुल अतिरिक्त आय",
            activeListingTitle: "🌾 सक्रिय लिस्टिंग", viewBidsBtn: "बोली देखें →",
            howItWorksTitle: "🚀 कैसे काम करता है — 3 आसान कदम",
            step1Name: "अपना कचरा सूचीबद्ध करें", step1Desc: "बताएं आपके पास कौन सा फसल कचरा है",
            step2Name: "सबसे अच्छी कीमत पाएं", step2Desc: "खरीदार आपके कचरे के लिए बोली लगाएंगे",
            step3Name: "बैंक में पैसे पाएं", step3Desc: "पैसे सीधे आपके खाते में आएंगे",
            sellWasteBtn: "अभी मेरा फसल कचरा बेचें",
            sellWasteSub: "गन्ना, चावल का पुआल, मक्के का डंठल, या गोबर",
            listNewWasteBanner: "30 सेकंड में नया कचरा लिस्ट करें",
            listNewWasteDesc: "गन्ना, चावल का पुआल, मक्के का डंठल, या गोबर",
            myListingsTitle: "📋 मेरी सक्रिय लिस्टिंग",
            noListingsMsg: "आपकी कोई सक्रिय लिस्टिंग नहीं है।",
            addFirstListing: "+ अपनी पहली लिस्टिंग जोड़ें",
            liveBiddingTitle: "⚡ लाइव बोली स्ट्रीम", liveLabel: "लाइव",
            noBidsYet: "बोली प्राप्त करने के लिए कचरा सूचीबद्ध करें!",
            acceptBid: "स्वीकार करें ₹", bidAccepted: "✅ बोली स्वीकार! भुगतान प्रक्रिया में...",
            marketPricesTitle: "📊 आज के कचरा बाज़ार के दाम",
            sugarcaneBagasse: "गन्ने की खोई", riceStraw: "चावल का पुआल",
            cornStalks: "मक्के का डंठल", cattleManure: "गोबर",
            perTon: "टन", steady: "स्थिर",
            predictorTitle: "🔮 कचरा अनुमानक", lockBuyersEarly: "पहले से खरीदार बुक करें",
            predictorIntro: "अपनी फसल का विवरण दें। हम बताएंगे कितना कचरा होगा और कटाई से पहले खरीदार ढूंढेंगे!",
            cropTypeLabel: "फसल का प्रकार", harvestDateLabel: "अपेक्षित कटाई की तारीख",
            harvestQtyLabel: "अनुमानित फसल (बोरे / टन)", harvestQtyPlaceholder: "जैसे 100 बोरे",
            calculateBtn: "कचरा गणना करें और खरीदार खोजें",
            predictionResult: "🎉 अनुमान परिणाम",
            estimatedWaste: "अनुमानित कचरा", matchedBuyer: "मिलान किया हुआ खरीदार", expectedPrice: "अपेक्षित कीमत",
            cropRice: "चावल / धान का पुआल", cropSugarcane: "गन्ने की खोई",
            cropCorn: "मक्का / ज्वार का डंठल", cropWheat: "गेहूं का पुआल",
            carbonCalcTitle: "🌍 कार्बन क्रेडिट कैलकुलेटर",
            carbonCalcDesc: "जब आप कचरा जलाने की बजाय बेचते हैं तो आपको कार्बन क्रेडिट = अतिरिक्त पैसे मिलते हैं!",
            tonsNotBurned: "जितना कचरा नहीं जलाया:", tons: "टन",
            creditsEarned: "क्रेडिट मिले", extraMoney: "अतिरिक्त पैसे", co2Prevented: "CO₂ रोका गया",
            proofLedgerTitle: "📋 स्थायी प्रमाण बही", gpsVerified: "GPS सत्यापित",
            noProofYet: "सत्यापित प्रमाण रिकॉर्ड उत्पन्न करने के लिए बिक्री पूरी करें।",
            exportBankProof: "बैंक प्रमाण रसीद निर्यात करें",
            bankReceiptTitle: "🏦 एग्रोलूप बैंक प्रमाण रसीद", certifiedDoc: "प्रमाणित दस्तावेज़",
            printReceipt: "रसीद प्रिंट / डाउनलोड करें",
            villageInfoTitle: "🏘️ मेरे गाँव के आँकड़े",
            farmersJoined: "किसान जुड़े", tonsSaved: "टन बचाए", totalVillageEarnings: "गाँव की कमाई",
            districtCompTitle: "🏆 जिला गाँव प्रतियोगिता", prizeLabel: "₹50,000 पुरस्कार",
            competitionDesc: "पड़ोसी गाँवों से प्रतिस्पर्धा करें। शीर्ष गाँव ₹50,000 सामुदायिक जल कोष जीतता है!",
            leaderboardTitle: "🥇 शीर्ष किसान लीडरबोर्ड",
            videoTutorialsTitle: "🎬 सफलता की कहानियाँ और ट्यूटोरियल",
            peerChatTitle: "💬 किसान पीयर चैट", onlineLabel: "12 ऑनलाइन",
            chatPlaceholder: "अपना संदेश लिखें...", sendBtn: "भेजें",
            helpTitle: "📞 मदद चाहिए?",
            callHelpline: "हेल्पलाइन कॉल करें", whatsappHelp: "WhatsApp पर मदद", watchGuide: "वीडियो गाइड देखें",
            recordsTitle: "📋 मेरे रिकॉर्ड और प्रमाण",
            noRecordsMsg: "आपके विक्रय रिकॉर्ड पहले लेनदेन के बाद यहाँ दिखेंगे।",
            navDashboard: "डैशबोर्ड", navMarketplace: "बेचें", navPreHarvest: "योजना", navCommunity: "समुदाय",
            listWasteTitle: "🌾 अपना फसल कचरा सूचीबद्ध करें",
            wasteTypeLabel: "कौन सा कचरा?", howMuchLabel: "कितना? (टन)",
            readyDateLabel: "कब तैयार है?", pickupAddressLabel: "पिकअप पता",
            qtyPlaceholder: "जैसे 10", addressPlaceholder: "पिकअप के लिए खेत का पता",
            publishListingBtn: "प्रकाशित करें और खरीदार पाएं",
            optSugarcane: "गन्ने की खोई", optRice: "चावल का पुआल",
            optCorn: "मक्के का डंठल", optWheat: "गेहूं का पुआल", optManure: "गोबर",
            toastListed: "लिस्टिंग प्रकाशित! खरीदार जल्द बोली लगाएंगे।",
            toastOtpSent: "OTP भेजा गया! (सत्यापन के लिए कोई भी 4 अंक डालें)",
            toastWelcome: "एग्रोलूप में आपका स्वागत है!",
            toastLogout: "सफलतापूर्वक लॉगआउट हो गया।",
            editProfileTitle: "👨‍🌾 प्रोफाइल संपादित करें", saveProfileBtn: "बदलाव सहेजें", profileSaved: "प्रोफाइल सफलतापूर्वक अपडेट हो गई!",
            profileMemberSince: "सदस्य तिथि",
            notificationsTitle: "🔔 सूचनाएं", noNotifsMsg: "अभी कोई सूचना नहीं।",
            videoSearchPlaceholder: "YouTube पर खेती वीडियो खोजें..."
        },
        mr: {
            appName: "ॲग्रोलूप", loginTagline: "पीक कचरा विका • पैसे कमवा • पृथ्वी वाचवा",
            fullNameLabel: "पूर्ण नाव", fullNamePlaceholder: "तुमचे पूर्ण नाव लिहा",
            contactLabel: "मोबाईल नंबर किंवा ईमेल", contactPlaceholder: "जसे 9876543210 किंवा name@email.com",
            locationLabel: "गाव / शहर / तालुका", locationPlaceholder: "जसे नाशिक, सिन्नार, देवळा",
            sendOtpBtn: "OTP पाठवा →", chooseLangLabel: "भाषा निवडा:",
            otpTitle: "OTP सत्यापन", otpSubtitle: "आम्ही तुमच्या नंबर/ईमेलवर 4 अंकी कोड पाठवला",
            enterOtpLabel: "OTP टाका", otpPlaceholder: "● ● ● ●",
            verifyBtn: "सत्यापित करा आणि सुरू करा →", resendOtp: "OTP पुन्हा पाठवा", changeDetails: "← तपशील बदला",
            badgeTag: "शेतकरी हब", darkMode: "डार्क मोड", lightMode: "लाइट मोड", logoutBtn: "लॉगआउट",
            greetingSub: "पुन्हा स्वागत,",
            sec1Title: "📊 माझे शेत डॅशबोर्ड", sec2Title: "💰 कचरा विका आणि कमवा",
            sec3Title: "📅 आधीच योजना करा", sec4Title: "🤝 माझा समुदाय",
            agroScoreLabel: "तुमचा ॲग्रोस्कोर",
            agroScoreStatus: "🌟 तुमचा स्कोर वाढवण्यासाठी कचरा विकायला सुरुवात करा!",
            wasteSoldLabel: "कचरा विकला", totalEarnedLabel: "एकूण कमाई", co2SavedLabel: "CO₂ बचत",
            cycleActionsTitle: "🔄 6-चरण ॲग्रोलूप चक्र",
            cycleCollect: "एकत्र आणि विका", cycleCollectDesc: "कचरा सूचीबद्ध करा",
            cycleRecover: "पुनर्प्राप्त आणि साठवा", cycleRecoverDesc: "सुरक्षित साठवणूक टिप्स",
            cycleLearn: "शिका आणि करा", cycleLearnDesc: "ट्यूटोरियल पहा",
            cycleMonitor: "कमाई ट्रॅक करा", cycleMonitorDesc: "उत्पन्नावर लक्ष",
            cycleProve: "प्रभाव सिद्ध करा", cycleProveDesc: "कार्बन प्रमाणपत्र",
            cyclePlan: "पूर्व-कापणी", cyclePlanDesc: "आधीच खरेदीदार बुक",
            monthlyEarningsTitle: "💰 मासिक कमाई सारांश",
            directWasteSales: "थेट कचरा विक्री", carbonCreditsEarned: "कार्बन क्रेडिट",
            totalExtraIncome: "एकूण अतिरिक्त उत्पन्न",
            howItWorksTitle: "🚀 कसे काम करते — ३ सोपे टप्पे",
            step1Name: "तुमचा कचरा सूचीबद्ध करा", step1Desc: "तुमच्याकडे कोणता पीक कचरा आहे ते सांगा",
            step2Name: "सर्वोत्तम किंमत मिळवा", step2Desc: "खरेदीदार तुमच्या कचऱ्यासाठी बोली लावतील",
            step3Name: "बँकेत पैसे मिळवा", step3Desc: "पैसे सीधे तुमच्या खात्यात येतील",
            sellWasteBtn: "आता माझा पीक कचरा विका",
            sellWasteSub: "ऊस, भाताचे पेंढे, मक्याचे ताट, किंवा शेणखत",
            listNewWasteBanner: "30 सेकंदांत नवीन कचरा सूचीबद्ध करा",
            listNewWasteDesc: "ऊस, भात, मका किंवा शेणखत",
            myListingsTitle: "📋 माझ्या सक्रिय यादी",
            noListingsMsg: "तुमची कोणतीही सक्रिय यादी नाही.",
            addFirstListing: "+ तुमची पहिली यादी जोडा",
            activeListingTitle: "🌾 सक्रिय यादी", viewBidsBtn: "बोली पहा →",
            liveBiddingTitle: "⚡ लाइव बोली स्ट्रीम", liveLabel: "लाइव",
            noBidsYet: "बोली मिळवण्यासाठी कचरा सूचीबद्ध करा!",
            acceptBid: "स्वीकार करा ₹", bidAccepted: "✅ बोली स्वीकारली! पेमेंट प्रक्रियेत...",
            marketPricesTitle: "📊 आजचे कचरा बाजारभाव",
            sugarcaneBagasse: "उसाचे पाचट", riceStraw: "भाताचे पेंढे",
            cornStalks: "मक्याचे ताट", cattleManure: "शेणखत",
            perTon: "टन", steady: "स्थिर",
            predictorTitle: "🔮 कचरा अंदाज यंत्र", lockBuyersEarly: "आधीच खरेदीदार बुक करा",
            predictorIntro: "तुमच्या फसलीचे तपशील द्या. आम्ही सांगू किती कचरा होईल आणि कापणीपूर्वी खरेदीदार शोधू!",
            cropTypeLabel: "पिकाचा प्रकार", harvestDateLabel: "अपेक्षित कापणी तारीख",
            harvestQtyLabel: "अंदाजित पीक (बोरे / टन)", harvestQtyPlaceholder: "जसे 100 बोरे",
            calculateBtn: "कचरा गणना करा आणि खरेदीदार शोधा",
            predictionResult: "🎉 अंदाज निकाल",
            estimatedWaste: "अंदाजित कचरा", matchedBuyer: "जुळलेला खरेदीदार", expectedPrice: "अपेक्षित किंमत",
            cropRice: "भात / तांदूळ पेंढे", cropSugarcane: "उसाचे पाचट",
            cropCorn: "मका / ज्वारीचे ताट", cropWheat: "गव्हाचे काड",
            carbonCalcTitle: "🌍 कार्बन क्रेडिट कॅल्क्युलेटर",
            carbonCalcDesc: "जेव्हा तुम्ही कचरा जाळण्याऐवजी विकता तेव्हा तुम्हाला कार्बन क्रेडिट = अतिरिक्त पैसे मिळतात!",
            tonsNotBurned: "किती कचरा जाळला नाही:", tons: "टन",
            creditsEarned: "क्रेडिट्स मिळाले", extraMoney: "अतिरिक्त पैसे", co2Prevented: "CO₂ टाळला",
            proofLedgerTitle: "📋 कायमस्वरूपी पुरावा बही", gpsVerified: "GPS सत्यापित",
            noProofYet: "सत्यापित पुरावा रेकॉर्ड तयार करण्यासाठी विक्री पूर्ण करा.",
            exportBankProof: "बँक प्रमाण पावती निर्यात करा",
            bankReceiptTitle: "🏦 ॲग्रोलूप बँक प्रमाण पावती", certifiedDoc: "प्रमाणित दस्तावेज",
            receiptFarmerName: "शेतकऱ्याचे नाव", receiptLocation: "ठिकाण",
            receiptTotalSold: "एकूण कचरा विकला", receiptTotalEarned: "एकूण कमाई",
            receiptCarbonCredits: "कार्बन क्रेडिट्स मिळाले", receiptCO2Saved: "CO₂ प्रदूषण टाळला",
            receiptDate: "तारीख", receiptVerified: "GPS सत्यापित • ब्लॉकचेन सुरक्षित",
            printReceipt: "पावती प्रिंट / डाउनलोड करा",
            villageInfoTitle: "🏘️ माझ्या गावाचे आकडे",
            farmersJoined: "शेतकरी जोडले", tonsSaved: "टन वाचवले", totalVillageEarnings: "गावाची कमाई",
            districtCompTitle: "🏆 जिल्हा गाव स्पर्धा", prizeLabel: "₹50,000 बक्षीस",
            competitionDesc: "शेजारच्या गावांशी स्पर्धा करा. अव्वल गावाला ₹50,000 सामुदायिक जल निधी मिळतो!",
            block1Name: "नाशिक ब्लॉक 1", block2Name: "नाशिक ब्लॉक 2", yourBlock: "(तुमचा ब्लॉक)",
            leaderboardTitle: "🥇 शीर्ष शेतकरी लीडरबोर्ड",
            leaderVillage1: "सिन्नार गाव", leaderVillage2: "देवळा गाव", leaderVillage3: "नाशिक गाव",
            videoTutorialsTitle: "🎬 यशोगाथा आणि ट्यूटोरियल",
            videoGeeta: "शेतकरी गीताची कथा", videoGeetaDesc: "उसाच्या कचऱ्यातून ₹22,500 कमवले",
            videoRam: "शेतकरी रामचे मार्गदर्शन", videoRamDesc: "यादी कशी करायची आणि सर्वोत्तम किंमत कशी मिळवायची",
            videoComingSoon: "व्हिडिओ ट्यूटोरियल लवकरच येत आहे! शेतकऱ्यांच्या यशोगाथा पहा.",
            peerChatTitle: "💬 शेतकरी चॅट", onlineLabel: "12 ऑनलाइन",
            chatMsg1: "आज बगॅसला ₹575/टन मिळाले! 🎉",
            chatMsg2: "कोणता खरेदीदार? मला पण विकायचे आहे!",
            chatMsg3: "BioEnergy Ltd. खूप जलद पिकअप.",
            chatPlaceholder: "तुमचा संदेश लिहा...", sendBtn: "पाठवा",
            mobileView: "मोबाइल व्ह्यू", desktopView: "डेस्कटॉप व्ह्यू",
            helpTitle: "📞 मदत हवी?",
            callHelpline: "हेल्पलाइन कॉल करा", whatsappHelp: "WhatsApp मदत", watchGuide: "व्हिडिओ मार्गदर्शक पहा",
            recordsTitle: "📋 माझे रेकॉर्ड आणि पुरावा",
            noRecordsMsg: "तुमच्या पहिल्या व्यवहारानंतर तुमचे विक्री रेकॉर्ड येथे दिसतील.",
            navDashboard: "डॅशबोर्ड", navMarketplace: "विक्री", navPreHarvest: "योजना", navCommunity: "समुदाय",
            listWasteTitle: "🌾 तुमचा पीक कचरा सूचीबद्ध करा",
            wasteTypeLabel: "कोणता कचरा?", howMuchLabel: "किती? (टन)",
            readyDateLabel: "कधी तयार?", pickupAddressLabel: "पिकअप पत्ता",
            qtyPlaceholder: "जसे 10", addressPlaceholder: "पिकअपसाठी शेताचा पत्ता",
            publishListingBtn: "प्रकाशित करा आणि खरेदीदार मिळवा",
            optSugarcane: "उसाचे पाचट", optRice: "भाताचे पेंढे",
            optCorn: "मक्याचे ताट", optWheat: "गव्हाचे काड", optManure: "शेणखत",
            toastListed: "यादी प्रकाशित! खरेदीदार लवकरच बोली लावतील.",
            toastOtpSent: "OTP पाठवला! (सत्यापनासाठी कोणतेही 4 अंक टाका)",
            toastWelcome: "ॲग्रोलूपवर तुमचे स्वागत!",
            toastLogout: "यशस्वीपणे लॉगआउट झाला.",
            editProfileTitle: "👨‍🌾 प्रोफाइल संपादित करा", saveProfileBtn: "बदल सेव्ह करा", profileSaved: "प्रोफाइल यशस्वीपणे अपडेट झाले!",
            profileMemberSince: "सदस्य तारीख",
            notificationsTitle: "🔔 सूचना", noNotifsMsg: "अजून कोणतीही सूचना नाही.",
            videoSearchPlaceholder: "YouTube वर शेती व्हिडिओ शोधा..."
        },
        gu: { appName: "એગ્રોલૂપ", loginTagline: "ખેતી કચરો વેચો • પૈસા કમાવો • પૃથ્વી બચાવો", fullNameLabel: "પૂર્ણ નામ", fullNamePlaceholder: "તમારું પૂર્ણ નામ લખો", contactLabel: "મોબાઈલ નંબર અથવા ઈમેલ", contactPlaceholder: "દા.ત. 9876543210", locationLabel: "ગામ / શહેર", locationPlaceholder: "દા.ત. નાસિક", sendOtpBtn: "OTP મોકલો →", chooseLangLabel: "ભાષા પસંદ કરો:", otpTitle: "OTP ચકાસણી", otpSubtitle: "અમે 4 અંકનો કોડ મોકલ્યો", enterOtpLabel: "OTP દાખલ કરો", otpPlaceholder: "● ● ● ●", verifyBtn: "ચકાસો અને શરૂ કરો →", resendOtp: "OTP ફરી મોકલો", changeDetails: "← વિગતો બદલો", badgeTag: "ખેડૂત હબ", darkMode: "ડાર્ક મોડ", lightMode: "લાઇટ મોડ", logoutBtn: "લોગઆઉટ", greetingSub: "ફરી સ્વાગત,", sec1Title: "📊 મારું ખેત ડેશબોર્ડ", sec2Title: "💰 કચરો વેચો અને કમાવો", sec3Title: "📅 પહેલાથી યોજના બનાવો", sec4Title: "🤝 મારો સમુદાય", agroScoreLabel: "તમારો એગ્રોસ્કોર", agroScoreStatus: "🌟 સ્કોર વધારવા કચરો વેચવાનું શરૂ કરો!", wasteSoldLabel: "કચરો વેચ્યો", totalEarnedLabel: "કુલ કમાણી", co2SavedLabel: "CO₂ બચત", howItWorksTitle: "🚀 કેવી રીતે કામ કરે — 3 સરળ પગલાં", step1Name: "કચરો સૂચિબદ્ધ કરો", step1Desc: "તમારી પાસે કયો કચરો છે જણાવો", step2Name: "શ્રેષ્ઠ ભાવ મેળવો", step2Desc: "ખરીદદારો બોલી લગાવશે", step3Name: "બેંકમાં પૈસા", step3Desc: "પૈસા સીધા ખાતામાં", sellWasteBtn: "હમણાં કચરો વેચો", sellWasteSub: "શેરડી, ડાંગર, મકાઈ કે છાણ", myListingsTitle: "📋 મારી સક્રિય સૂચિ", noListingsMsg: "કોઈ સક્રિય સૂચિ નથી.", addFirstListing: "+ પહેલી સૂચિ ઉમેરો", marketPricesTitle: "📊 આજના ભાવ", sugarcaneBagasse: "શેરડીનું ભૂસું", riceStraw: "ડાંગરનું પરાળ", cornStalks: "મકાઈનું ડાંટ", cattleManure: "છાણ", perTon: "ટન", steady: "સ્થિર", predictorTitle: "🔮 કચરા અનુમાનક", lockBuyersEarly: "ખરીદદાર બુક કરો", predictorIntro: "ફસલ વિગતો આપો. અમે ગણતરી કરીશું.", cropTypeLabel: "પાકનો પ્રકાર", harvestDateLabel: "લણણી તારીખ", harvestQtyLabel: "અંદાજિત પાક", harvestQtyPlaceholder: "દા.ત. 100", calculateBtn: "ગણતરી કરો", predictionResult: "🎉 અનુમાન પરિણામ", estimatedWaste: "અંદાજિત કચરો", matchedBuyer: "ખરીદદાર", expectedPrice: "અપેક્ષિત ભાવ", cropRice: "ડાંગર", cropSugarcane: "શેરડી", cropCorn: "મકાઈ", cropWheat: "ઘઉં", carbonCalcTitle: "🌍 કાર્બન ક્રેડિટ", carbonCalcDesc: "કચરો ન બાળવાથી કાર્બન ક્રેડિટ = વધુ પૈસા!", tonsNotBurned: "ન બાળેલો કચરો:", tons: "ટન", creditsEarned: "ક્રેડિટ", extraMoney: "વધારાના પૈસા", co2Prevented: "CO₂ અટકાવ્યો", villageInfoTitle: "🏘️ ગામના આંકડા", farmersJoined: "ખેડૂતો જોડાયા", tonsSaved: "ટન બચાવ્યા", totalVillageEarnings: "ગામની કમાણી", helpTitle: "📞 મદદ?", callHelpline: "હેલ્પલાઈન", whatsappHelp: "WhatsApp", watchGuide: "વીડિયો ગાઈડ", recordsTitle: "📋 રેકોર્ડ", noRecordsMsg: "પહેલા વ્યવહાર પછી રેકોર્ડ દેખાશે.", navDashboard: "ડેશબોર્ડ", navMarketplace: "વેચાણ", navPreHarvest: "યોજના", navCommunity: "સમુદાય", listWasteTitle: "🌾 કચરો સૂચિબદ્ધ કરો", wasteTypeLabel: "કચરાનો પ્રકાર?", howMuchLabel: "કેટલો? (ટન)", readyDateLabel: "ક્યારે તૈયાર?", pickupAddressLabel: "પિકઅપ સરનામું", qtyPlaceholder: "દા.ત. 10", addressPlaceholder: "ખેતનું સરનામું", publishListingBtn: "પ્રકાશિત કરો", optSugarcane: "શેરડી", optRice: "ડાંગર", optCorn: "મકાઈ", optWheat: "ઘઉં", optManure: "છાણ", toastListed: "સૂચિ પ્રકાશિત!", toastOtpSent: "OTP મોકલ્યો!", toastWelcome: "સ્વાગત છે!", toastLogout: "લોગઆઉટ થયું." }
    };

    // For languages without full translations, fallback to English
    const FALLBACK_LANG = 'en';
    function t(key) {
        const lang = T[currentLang];
        if (lang && lang[key]) return lang[key];
        return T[FALLBACK_LANG][key] || key;
    }

    // =====================================================================
    // APPLY ALL TRANSLATIONS TO DOM
    // =====================================================================
    function applyTranslations() {
        // Text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = t(key);
            if (val) el.innerHTML = val;
        });
        // Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const val = t(key);
            if (val) el.placeholder = val;
        });
        // RTL for Arabic/Urdu
        if (currentLang === 'ar' || currentLang === 'ur') {
            document.body.setAttribute('dir', 'rtl');
        } else {
            document.body.setAttribute('dir', 'ltr');
        }
    }

    // Re-renders all dynamically generated content when language changes
    function refreshAllDynamicContent() {
        renderListings();
        updateStats();
        updateActiveListingPreview();
        loadSavedRecords();
        applyTheme(isDarkTheme); // refresh theme text
        applyViewMode(isMobileView); // refresh view toggle text
    }

    // =====================================================================
    // LOGIN / REGISTRATION SYSTEM
    // =====================================================================
    const loginOverlay = document.getElementById('loginOverlay');
    const loginStep1 = document.getElementById('loginStep1');
    const loginStep2 = document.getElementById('loginStep2');
    const registerForm = document.getElementById('registerForm');
    const otpForm = document.getElementById('otpForm');
    const backToStep1 = document.getElementById('backToStep1');
    const resendOtpBtn = document.getElementById('resendOtpBtn');
    const mainApp = document.getElementById('appWrapper') || document.getElementById('mainApp');
    const loginLangSelect = document.getElementById('loginLangSelect');

    let pendingRegistration = {};

    // Check if user is already logged in
    function checkLogin() {
        const saved = localStorage.getItem('agroloop_user');
        if (saved) {
            userData = JSON.parse(saved);
            showMainApp();
        } else {
            showLogin();
        }
    }

    function showLogin() {
        loginOverlay.classList.add('active');
        loginOverlay.style.display = '';
        mainApp.style.display = 'none';
    }

    function showMainApp() {
        loginOverlay.classList.remove('active');
        loginOverlay.style.display = 'none';
        mainApp.style.display = '';
        populateUserData();
    }

    function populateUserData() {
        if (!userData) return;
        const nameEl = document.getElementById('displayUserName');
        const locEl = document.getElementById('displayUserLoc');
        if (nameEl) nameEl.textContent = userData.fullName;
        if (locEl) locEl.textContent = '📍 ' + userData.location;
        // Restore saved avatar
        if (userData.avatar) {
            const headerAvatar = document.querySelector('.avatar-emoji');
            if (headerAvatar) headerAvatar.textContent = userData.avatar;
        }
        // Set pickup address default
        const modalLoc = document.getElementById('modalLocation');
        if (modalLoc && !modalLoc.value) modalLoc.value = userData.location;
    }

    // Registration form submission
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('regFullName').value.trim();
            const contact = document.getElementById('regContact').value.trim();
            const location = document.getElementById('regLocation').value.trim();

            if (!name || !contact || !location) return;

            pendingRegistration = { fullName: name, contact, location };
            loginStep1.style.display = 'none';
            loginStep2.style.display = 'block';
            showToast(t('toastOtpSent'));
        });
    }

    // OTP verification
    if (otpForm) {
        otpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const otp = document.getElementById('regOtp').value.trim();
            if (otp.length < 4) return;

            // Accept any 4+ digit OTP (simulated)
            userData = {
                ...pendingRegistration,
                isLoggedIn: true,
                registeredAt: new Date().toISOString()
            };
            localStorage.setItem('agroloop_user', JSON.stringify(userData));
            showMainApp();
            showToast(t('toastWelcome'));
        });
    }

    if (backToStep1) {
        backToStep1.addEventListener('click', () => {
            loginStep2.style.display = 'none';
            loginStep1.style.display = 'block';
        });
    }

    if (resendOtpBtn) {
        resendOtpBtn.addEventListener('click', () => {
            showToast(t('toastOtpSent'));
        });
    }

    // Login language selector
    if (loginLangSelect) {
        loginLangSelect.addEventListener('change', (e) => syncAllLangSelects(e.target.value));
    }

    // Logout (shared function for header and profile)
    function doLogout() {
        localStorage.removeItem('agroloop_user');
        userData = null;
        // Close profile modal if open
        const pm = document.getElementById('profileModal');
        if (pm) pm.classList.remove('active');
        showToast(t('toastLogout'));
        setTimeout(() => {
            loginStep1.style.display = 'block';
            loginStep2.style.display = 'none';
            showLogin();
        }, 500);
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', doLogout);

    const profileLogoutBtn = document.getElementById('profileLogoutBtn');
    if (profileLogoutBtn) profileLogoutBtn.addEventListener('click', doLogout);

    // =====================================================================
    // THEME: DARK / LIGHT TOGGLE
    // =====================================================================
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const mobileThemeBtn = document.getElementById('mobileThemeBtn');
    const themeText = document.getElementById('themeText');

    function applyTheme(dark) {
        isDarkTheme = dark;
        document.body.classList.toggle('dark-theme', dark);
        document.body.classList.toggle('light-theme', !dark);
        const icon = dark ? '☀️' : '🌙';
        const text = dark ? t('lightMode') : t('darkMode');
        if (themeToggleBtn) themeToggleBtn.querySelector('.icon').textContent = icon;
        if (mobileThemeBtn) mobileThemeBtn.querySelector('.icon').textContent = icon;
        if (themeText) themeText.textContent = text;
        localStorage.setItem('agroloop-theme', dark ? 'dark' : 'light');
    }

    applyTheme(isDarkTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => applyTheme(!isDarkTheme));
    }
    if (mobileThemeBtn) {
        mobileThemeBtn.addEventListener('click', () => applyTheme(!isDarkTheme));
    }

    // =====================================================================
    // VIEW TOGGLE: DESKTOP / MOBILE
    // =====================================================================
    const viewToggleBtn = document.getElementById('viewToggleBtn');
    const appWrapper = document.getElementById('appWrapper');
    let isMobileView = localStorage.getItem('agroloop-view') !== 'desktop';

    function applyViewMode(mobile) {
        isMobileView = mobile;
        if (appWrapper) {
            appWrapper.classList.toggle('mobile-frame-mode', mobile);
            appWrapper.classList.toggle('full-view-mode', !mobile);
        }
        if (viewToggleBtn) {
            viewToggleBtn.querySelector('.icon').textContent = mobile ? '🖥️' : '📱';
            const btnText = viewToggleBtn.querySelector('.btn-text');
            if (btnText) btnText.textContent = mobile ? t('desktopView') : t('mobileView');
        }
        localStorage.setItem('agroloop-view', mobile ? 'mobile' : 'desktop');
    }

    applyViewMode(isMobileView);

    if (viewToggleBtn) {
        viewToggleBtn.addEventListener('click', () => applyViewMode(!isMobileView));
    }

    // =====================================================================
    // LANGUAGE SWITCHER
    // =====================================================================
    const langSelect = document.getElementById('langSelect');
    const langPickerModal = document.getElementById('langPickerModal');
    const openLangPicker = document.getElementById('openLangPicker');
    const closeLangPicker = document.getElementById('closeLangPicker');

    function syncAllLangSelects(newLang) {
        currentLang = newLang;
        localStorage.setItem('agroloop-lang', currentLang);
        applyTranslations();
        refreshAllDynamicContent();
        if (langSelect) langSelect.value = currentLang;
        if (loginLangSelect) loginLangSelect.value = currentLang;
        highlightActiveLang();
    }

    function highlightActiveLang() {
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.getAttribute('data-lang') === currentLang);
        });
    }

    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.addEventListener('change', (e) => syncAllLangSelects(e.target.value));
    }

    // Language picker modal
    if (openLangPicker) {
        openLangPicker.addEventListener('click', () => {
            highlightActiveLang();
            if (langPickerModal) langPickerModal.classList.add('active');
        });
    }
    if (closeLangPicker) {
        closeLangPicker.addEventListener('click', () => {
            if (langPickerModal) langPickerModal.classList.remove('active');
        });
    }

    // Language option buttons
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.getAttribute('data-lang');
            syncAllLangSelects(lang);
            if (langPickerModal) langPickerModal.classList.remove('active');
            showToast('🌐 ' + opt.querySelector('.lang-name').textContent);
        });
    });

    if (loginLangSelect) loginLangSelect.value = currentLang;
    highlightActiveLang();

    // =====================================================================
    // BOTTOM NAVIGATION — scroll to section
    // =====================================================================
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const sectionId = tab.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Highlight active nav tab on scroll
    const appContent = document.getElementById('appContent');
    if (appContent) {
        appContent.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('.app-section');
            let currentSection = '';
            sections.forEach(sec => {
                const top = sec.offsetTop - appContent.scrollTop;
                if (top < 200) currentSection = sec.id;
            });
            navTabs.forEach(tab => {
                tab.classList.toggle('active', tab.getAttribute('data-section') === currentSection);
            });
        });
    }

    // =====================================================================
    // SELL WASTE MODAL
    // =====================================================================
    const sellModal = document.getElementById('sellModal');
    const openSellModalBtn = document.getElementById('openSellModalBtn');
    const btnAddFirstListing = document.getElementById('btnAddFirstListing');
    const closeSellModal = document.getElementById('closeSellModal');
    const sellWasteForm = document.getElementById('sellWasteForm');
    const bannerListWaste = document.getElementById('bannerListWaste');

    function openSellModal() { if (sellModal) sellModal.classList.add('active'); }
    function closeSellModalFn() { if (sellModal) sellModal.classList.remove('active'); }

    if (openSellModalBtn) openSellModalBtn.addEventListener('click', openSellModal);
    if (btnAddFirstListing) btnAddFirstListing.addEventListener('click', openSellModal);
    if (bannerListWaste) bannerListWaste.addEventListener('click', openSellModal);
    if (closeSellModal) closeSellModal.addEventListener('click', closeSellModalFn);

    if (sellWasteForm) {
        sellWasteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const crop = document.getElementById('modalWasteType').value;
            const qty = document.getElementById('modalQuantity').value;
            const date = document.getElementById('modalReadyDate').value;
            const location = document.getElementById('modalLocation').value;

            addListing(crop, qty, date, location);
            closeSellModalFn();
            showToast(t('toastListed'));

            // Trigger simulated bids after listing
            setTimeout(() => simulateBids(crop, parseFloat(qty)), 1500);
        });
    }

    // =====================================================================
    // LISTINGS (localStorage)
    // =====================================================================
    function getListings() {
        return JSON.parse(localStorage.getItem('agroloop_listings') || '[]');
    }

    function addListing(crop, qty, date, location) {
        const listings = getListings();
        listings.push({
            id: Date.now(),
            crop, quantity: qty, readyDate: date, location,
            status: 'active', createdAt: new Date().toISOString()
        });
        localStorage.setItem('agroloop_listings', JSON.stringify(listings));
        renderListings();
        updateStats();
        updateActiveListingPreview();
    }

    function renderListings() {
        const area = document.getElementById('myListingsArea');
        if (!area) return;
        const listings = getListings();

        if (listings.length === 0) {
            area.className = 'empty-state';
            area.innerHTML = `
                <span class="empty-icon">📦</span>
                <p data-i18n="noListingsMsg">${t('noListingsMsg')}</p>
                <button class="btn btn-primary sm" id="btnAddFirstListing" data-i18n="addFirstListing">${t('addFirstListing')}</button>
            `;
            const btn = area.querySelector('#btnAddFirstListing');
            if (btn) btn.addEventListener('click', openSellModal);
        } else {
            area.className = 'listings-list';
            area.innerHTML = listings.map(l => `
                <div class="listing-item">
                    <div class="listing-info">
                        <strong>${l.crop}</strong>
                        <span>${l.quantity} ${t('tons')} • ${l.readyDate}</span>
                        <span class="listing-loc">📍 ${l.location}</span>
                    </div>
                    <span class="listing-status">${t('steady')}</span>
                    <button class="btn btn-secondary sm listing-del" data-id="${l.id}">✕</button>
                </div>
            `).join('');
            // Delete buttons
            area.querySelectorAll('.listing-del').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = parseInt(btn.getAttribute('data-id'));
                    const updated = getListings().filter(l => l.id !== id);
                    localStorage.setItem('agroloop_listings', JSON.stringify(updated));
                    renderListings();
                    updateStats();
                    updateActiveListingPreview();
                });
            });
        }
    }

    // =====================================================================
    // ACTIVE LISTING PREVIEW (Dashboard)
    // =====================================================================
    function updateActiveListingPreview() {
        const preview = document.getElementById('activeListingPreview');
        if (!preview) return;
        const listings = getListings();

        if (listings.length > 0) {
            const latest = listings[listings.length - 1];
            preview.style.display = '';
            document.getElementById('previewCropName').textContent = latest.crop;
            document.getElementById('previewQty').textContent = latest.quantity + ' ' + t('tons');
            document.getElementById('previewDate').textContent = latest.readyDate;
            const bidCount = Math.floor(Math.random() * 4) + 1;
            document.getElementById('previewBidCount').textContent = bidCount + ' bids';
        } else {
            preview.style.display = 'none';
        }
    }

    // View Bids button scrolls to marketplace
    const btnViewBids = document.getElementById('btnViewBids');
    if (btnViewBids) {
        btnViewBids.addEventListener('click', () => {
            const sec = document.getElementById('secMarketplace');
            if (sec) sec.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // =====================================================================
    // LIVE BIDDING SIMULATION
    // =====================================================================
    const BUYERS = [
        { name: 'BioEnergy Ltd.', emoji: '🏭' },
        { name: 'GreenBio Biogas', emoji: '🌿' },
        { name: 'EcoFuel Corp.', emoji: '⚡' },
        { name: 'AgroPower Solutions', emoji: '🔋' },
        { name: 'Clean Earth Bio', emoji: '🌍' }
    ];

    function simulateBids(crop, qty) {
        const area = document.getElementById('liveBiddingArea');
        if (!area) return;

        area.innerHTML = ''; // Clear empty msg

        const basePrices = {
            'Sugarcane Bagasse': 520, 'Rice Straw': 480,
            'Corn Stalks': 450, 'Wheat Straw': 460, 'Cattle Manure': 340
        };
        const base = basePrices[crop] || 500;

        const bids = [];
        const numBids = Math.min(BUYERS.length, 3 + Math.floor(Math.random() * 2));

        for (let i = 0; i < numBids; i++) {
            const buyer = BUYERS[i];
            const pricePerTon = base + Math.floor(Math.random() * 80) - 10;
            const totalPrice = pricePerTon * (qty || 10);
            bids.push({ buyer, pricePerTon, totalPrice, qty: qty || 10 });
        }

        // Sort by price (highest first)
        bids.sort((a, b) => b.pricePerTon - a.pricePerTon);

        // Add bids one by one with delay
        bids.forEach((bid, i) => {
            setTimeout(() => {
                const isHighest = i === 0;
                const bidEl = document.createElement('div');
                bidEl.className = `bid-item${isHighest ? ' bid-highest' : ''}`;
                bidEl.innerHTML = `
                    <div class="bid-buyer-avatar">${bid.buyer.emoji}</div>
                    <div class="bid-info">
                        <span class="bid-buyer-name">${bid.buyer.name}</span>
                        <span class="bid-details">${bid.qty} ${t('tons')} ${crop}</span>
                    </div>
                    <div style="text-align:right;">
                        <div class="bid-price">₹${bid.pricePerTon}/${t('perTon')}</div>
                        <div class="bid-total">= ₹${bid.totalPrice.toLocaleString()}</div>
                        <button class="btn-accept-bid" data-total="${bid.totalPrice}" data-buyer="${bid.buyer.name}" data-crop="${crop}" data-qty="${bid.qty}">
                            💸 ${t('acceptBid')}${bid.totalPrice.toLocaleString()}
                        </button>
                    </div>
                `;
                area.appendChild(bidEl);

                // Attach accept handler
                bidEl.querySelector('.btn-accept-bid').addEventListener('click', (e) => {
                    acceptBid(e.target);
                });
            }, (i + 1) * 800);
        });

        // Update notification badge
        const notifBadge = document.querySelector('.notif-badge');
        if (notifBadge) notifBadge.textContent = numBids;
    }

    function acceptBid(btn) {
        const total = btn.getAttribute('data-total');
        const buyer = btn.getAttribute('data-buyer');
        const crop = btn.getAttribute('data-crop');
        const qty = btn.getAttribute('data-qty');

        showToast(t('bidAccepted'));

        // Disable all accept buttons
        document.querySelectorAll('.btn-accept-bid').forEach(b => {
            b.disabled = true;
            b.style.opacity = '0.4';
        });
        btn.textContent = '✅ Accepted';
        btn.style.opacity = '1';
        btn.style.background = '#059669';

        // Add to proof ledger
        addProofLedgerEntry(crop, qty, total, buyer);

        // Update records area
        updateRecordsArea(crop, qty, total, buyer);
    }

    // =====================================================================
    // PROOF LEDGER
    // =====================================================================
    function addProofLedgerEntry(crop, qty, total, buyer) {
        const area = document.getElementById('proofLedgerArea');
        if (!area) return;

        // Remove empty msg
        const emptyMsg = area.querySelector('.ledger-empty');
        if (emptyMsg) emptyMsg.remove();

        const entry = document.createElement('div');
        entry.className = 'ledger-item';
        const now = new Date();
        const dateStr = now.toLocaleDateString('en-IN');
        const lat = (19.99 + Math.random() * 0.05).toFixed(4);
        const lng = (73.79 + Math.random() * 0.05).toFixed(4);

        entry.innerHTML = `
            <div class="ledger-icon">✅</div>
            <div class="ledger-info">
                <strong>${crop} — ${qty} ${t('tons')}</strong>
                <span>${buyer} • ${dateStr}</span>
                <span class="ledger-gps">📍 ${lat}°N, ${lng}°E</span>
            </div>
            <span class="ledger-amount">₹${parseInt(total).toLocaleString()}</span>
        `;
        area.appendChild(entry);

        // Store in localStorage
        const records = JSON.parse(localStorage.getItem('agroloop_records') || '[]');
        records.push({ crop, qty, total, buyer, date: dateStr, lat, lng, id: Date.now() });
        localStorage.setItem('agroloop_records', JSON.stringify(records));
    }

    function updateRecordsArea(crop, qty, total, buyer) {
        const area = document.getElementById('recordsArea');
        if (!area) return;

        if (area.classList.contains('empty-state')) {
            area.className = 'ledger-list';
            area.innerHTML = '';
        }

        const now = new Date();
        const entry = document.createElement('div');
        entry.className = 'ledger-item';
        entry.innerHTML = `
            <div class="ledger-icon">📄</div>
            <div class="ledger-info">
                <strong>${crop} — ${qty} ${t('tons')}</strong>
                <span>Sold to ${buyer} on ${now.toLocaleDateString('en-IN')}</span>
            </div>
            <span class="ledger-amount">₹${parseInt(total).toLocaleString()}</span>
        `;
        area.appendChild(entry);
    }

    // Load saved proof records
    function loadSavedRecords() {
        const records = JSON.parse(localStorage.getItem('agroloop_records') || '[]');
        const area = document.getElementById('proofLedgerArea');
        if (!area) return;

        // Clear existing entries to avoid duplicates on language switch
        area.innerHTML = '';

        if (records.length === 0) {
            area.innerHTML = `<div class="ledger-empty" data-i18n="noProofYet">${t('noProofYet')}</div>`;
        } else {
            records.forEach(r => {
                const entry = document.createElement('div');
                entry.className = 'ledger-item';
                entry.innerHTML = `
                    <div class="ledger-icon">✅</div>
                    <div class="ledger-info">
                        <strong>${r.crop} — ${r.qty} ${t('tons')}</strong>
                        <span>${r.buyer} • ${r.date}</span>
                        <span class="ledger-gps">📍 ${r.lat}°N, ${r.lng}°E</span>
                    </div>
                    <span class="ledger-amount">₹${parseInt(r.total).toLocaleString()}</span>
                `;
                area.appendChild(entry);
            });
        }
    }

    // =====================================================================
    // BANK PROOF RECEIPT MODAL
    // =====================================================================
    const bankProofModal = document.getElementById('bankProofModal');
    const btnExportBankProof = document.getElementById('btnExportBankProof');
    const closeBankProofModal = document.getElementById('closeBankProofModal');
    const btnPrintReceipt = document.getElementById('btnPrintReceipt');

    if (btnExportBankProof) {
        btnExportBankProof.addEventListener('click', () => {
            // Populate receipt
            const listings = getListings();
            const totalTons = listings.reduce((s, l) => s + (parseFloat(l.quantity) || 0), 0);
            const est = totalTons * 520;
            const credits = (totalTons * 0.5).toFixed(1);
            const co2 = totalTons * 500;

            document.getElementById('receiptFarmerName').textContent = userData ? userData.fullName : '—';
            document.getElementById('receiptLocation').textContent = userData ? userData.location : '—';
            document.getElementById('receiptTotalSold').textContent = totalTons + ' ' + t('tons');
            document.getElementById('receiptTotalEarned').textContent = '₹' + est.toLocaleString();
            document.getElementById('receiptCarbonCredits').textContent = credits;
            document.getElementById('receiptCO2Saved').textContent = co2.toLocaleString() + ' kg';
            document.getElementById('receiptDate').textContent = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
            document.getElementById('receiptId').textContent = 'ID: AGRO-' + Math.random().toString(36).substring(2, 8).toUpperCase();

            if (bankProofModal) bankProofModal.classList.add('active');
        });
    }

    if (closeBankProofModal) {
        closeBankProofModal.addEventListener('click', () => {
            if (bankProofModal) bankProofModal.classList.remove('active');
        });
    }

    if (btnPrintReceipt) {
        btnPrintReceipt.addEventListener('click', () => {
            window.print();
        });
    }

    // =====================================================================
    // PROFILE EDIT MODAL
    // =====================================================================
    const profileModal = document.getElementById('profileModal');
    const profileBtn = document.getElementById('profileBtn');
    const closeProfileModal = document.getElementById('closeProfileModal');
    const profileEditForm = document.getElementById('profileEditForm');

    function openProfileModal() {
        if (!profileModal) return;
        // Pre-fill fields with current user data
        if (userData) {
            const nameInput = document.getElementById('profileEditName');
            const contactInput = document.getElementById('profileEditContact');
            const locInput = document.getElementById('profileEditLocation');
            if (nameInput) nameInput.value = userData.fullName || '';
            if (contactInput) contactInput.value = userData.contact || '';
            if (locInput) locInput.value = userData.location || '';

            // Member since
            const memberSince = document.getElementById('profileMemberSince');
            if (memberSince && userData.registeredAt) {
                const d = new Date(userData.registeredAt);
                memberSince.textContent = d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
            }

            // Total earned
            const profileEarned = document.getElementById('profileTotalEarned');
            const listings = getListings();
            const totalTons = listings.reduce((s, l) => s + (parseFloat(l.quantity) || 0), 0);
            if (profileEarned) profileEarned.textContent = '₹' + (totalTons * 520).toLocaleString();

            // Set current avatar
            const currentAvatar = userData.avatar || '👨‍🌾';
            const profileAvatarEmoji = document.getElementById('profileAvatarEmoji');
            if (profileAvatarEmoji) profileAvatarEmoji.textContent = currentAvatar;

            // Highlight active avatar option
            document.querySelectorAll('.avatar-opt').forEach(opt => {
                opt.classList.toggle('active', opt.getAttribute('data-emoji') === currentAvatar);
            });
        }
        profileModal.classList.add('active');
    }

    if (profileBtn) profileBtn.addEventListener('click', openProfileModal);
    if (closeProfileModal) {
        closeProfileModal.addEventListener('click', () => {
            if (profileModal) profileModal.classList.remove('active');
        });
    }

    // Avatar picker
    document.querySelectorAll('.avatar-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            const emoji = opt.getAttribute('data-emoji');
            const profileAvatarEmoji = document.getElementById('profileAvatarEmoji');
            if (profileAvatarEmoji) profileAvatarEmoji.textContent = emoji;

            // Highlight selected
            document.querySelectorAll('.avatar-opt').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
        });
    });

    // Save profile
    if (profileEditForm) {
        profileEditForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('profileEditName').value.trim();
            const contact = document.getElementById('profileEditContact').value.trim();
            const location = document.getElementById('profileEditLocation').value.trim();
            const avatarEmoji = document.getElementById('profileAvatarEmoji').textContent;

            if (!name) return;

            // Update userData
            userData.fullName = name;
            userData.contact = contact;
            userData.location = location;
            userData.avatar = avatarEmoji;
            localStorage.setItem('agroloop_user', JSON.stringify(userData));

            // Update UI
            const nameEl = document.getElementById('displayUserName');
            const locEl = document.getElementById('displayUserLoc');
            if (nameEl) nameEl.textContent = name;
            if (locEl) locEl.textContent = '📍 ' + location;

            // Update header avatar
            const headerAvatar = document.querySelector('.avatar-emoji');
            if (headerAvatar) headerAvatar.textContent = avatarEmoji;

            profileModal.classList.remove('active');
            showToast('✅ ' + t('profileSaved'));
        });
    }

    // =====================================================================
    // NOTIFICATION PANEL
    // =====================================================================
    const notifModal = document.getElementById('notifModal');
    const notifBtn = document.getElementById('notifBtn');
    const closeNotifModal = document.getElementById('closeNotifModal');

    function getNotifications() {
        const now = new Date();
        const listings = getListings();
        const records = JSON.parse(localStorage.getItem('agroloop_records') || '[]');
        const notifs = [];

        // Welcome notification (always)
        notifs.push({
            icon: '🎉', color: 'green',
            title: t('toastWelcome'),
            desc: t('agroScoreStatus'),
            time: userData && userData.registeredAt ? new Date(userData.registeredAt) : now
        });

        // Notification for each listing
        listings.forEach(l => {
            notifs.push({
                icon: '📦', color: 'gold',
                title: `${l.crop} — ${l.quantity} ${t('tons')}`,
                desc: t('toastListed'),
                time: new Date(l.createdAt)
            });
        });

        // Notification for each sale
        records.forEach(r => {
            notifs.push({
                icon: '💰', color: 'green',
                title: `₹${parseInt(r.total).toLocaleString()} ${t('totalEarnedLabel')}`,
                desc: `${r.crop} → ${r.buyer}`,
                time: new Date()
            });
        });

        // Market price alert
        notifs.push({
            icon: '📈', color: 'blue',
            title: t('marketPricesTitle'),
            desc: t('sugarcaneBagasse') + ' ▲ +12%',
            time: new Date(now.getTime() - 2 * 60 * 60 * 1000)
        });

        // Sort by time (newest first)
        notifs.sort((a, b) => b.time - a.time);
        return notifs;
    }

    function openNotifModal() {
        if (!notifModal) return;
        const notifList = document.getElementById('notifList');
        if (!notifList) return;

        const notifs = getNotifications();

        if (notifs.length === 0) {
            notifList.innerHTML = `
                <div class="notif-empty">
                    <span class="notif-empty-icon">🔔</span>
                    <p data-i18n="noNotifsMsg">No notifications yet.</p>
                </div>
            `;
        } else {
            notifList.innerHTML = notifs.map((n, i) => {
                const timeStr = formatTimeAgo(n.time);
                return `
                    <div class="notif-item ${i < 3 ? 'unread' : ''}">
                        <div class="notif-icon-wrap ${n.color}">${n.icon}</div>
                        <div class="notif-info">
                            <strong>${n.title}</strong>
                            <span>${n.desc}</span>
                        </div>
                        <span class="notif-time">${timeStr}</span>
                    </div>
                `;
            }).join('');
        }

        // Reset badge
        const badge = document.querySelector('.notif-badge');
        if (badge) badge.textContent = '0';

        notifModal.classList.add('active');
    }

    function formatTimeAgo(date) {
        const now = new Date();
        const diff = Math.floor((now - date) / 1000);
        if (diff < 60) return 'Just now';
        if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
        if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
        return Math.floor(diff / 86400) + 'd ago';
    }

    if (notifBtn) notifBtn.addEventListener('click', openNotifModal);
    if (closeNotifModal) {
        closeNotifModal.addEventListener('click', () => {
            if (notifModal) notifModal.classList.remove('active');
        });
    }

    // =====================================================================
    // YOUTUBE VIDEO SEARCH
    // =====================================================================
    const videoSearchInput = document.getElementById('videoSearchInput');
    const btnVideoSearch = document.getElementById('btnVideoSearch');

    function searchYouTube() {
        if (!videoSearchInput) return;
        const query = videoSearchInput.value.trim();
        if (!query) return;
        const ytUrl = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query + ' farming tips');
        window.open(ytUrl, '_blank');
        videoSearchInput.value = '';
    }

    if (btnVideoSearch) btnVideoSearch.addEventListener('click', searchYouTube);
    if (videoSearchInput) {
        videoSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') { e.preventDefault(); searchYouTube(); }
        });
    }

    // =====================================================================
    // PEER CHAT
    // =====================================================================
    const chatInput = document.getElementById('chatInput');
    const btnSendChat = document.getElementById('btnSendChat');
    const chatMessages = document.getElementById('chatMessages');

    function sendChatMessage() {
        if (!chatInput || !chatMessages) return;
        const msg = chatInput.value.trim();
        if (!msg) return;

        const msgEl = document.createElement('div');
        msgEl.className = 'chat-msg outgoing';
        msgEl.innerHTML = `<span class="chat-sender">👨‍🌾 ${userData ? userData.fullName : 'You'}:</span> ${msg}`;
        chatMessages.appendChild(msgEl);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate reply
        setTimeout(() => {
            const replies = [
                'That\'s great! How many tons? 🌾',
                'Welcome! I also sold 5 tons last week.',
                'Try BioEnergy Ltd, they give best price! 💰',
                'Which area? We can transport together.',
                'Congrats! Keep selling, keep earning! 🎉'
            ];
            const reply = replies[Math.floor(Math.random() * replies.length)];
            const replyEl = document.createElement('div');
            replyEl.className = 'chat-msg incoming';
            const farmers = ['Ram', 'Geeta', 'Priya', 'Suresh'];
            const farmer = farmers[Math.floor(Math.random() * farmers.length)];
            replyEl.innerHTML = `<span class="chat-sender">👨‍🌾 ${farmer}:</span> ${reply}`;
            chatMessages.appendChild(replyEl);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1500);
    }

    if (btnSendChat) btnSendChat.addEventListener('click', sendChatMessage);
    if (chatInput) {
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') sendChatMessage();
        });
    }

    // =====================================================================
    // 6-STEP CYCLE QUICK ACTIONS
    // =====================================================================
    document.querySelectorAll('.cycle-card').forEach(card => {
        card.addEventListener('click', () => {
            const action = card.getAttribute('data-action');
            switch (action) {
                case 'sell': openSellModal(); break;
                case 'recover': showToast('♻️ Storage tips: Keep waste dry, covered & elevated!'); break;
                case 'learn':
                    const sec = document.getElementById('secCommunity');
                    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'monitor':
                    document.getElementById('secDashboard')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'prove':
                    document.getElementById('secPreHarvest')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'plan':
                    document.getElementById('secPreHarvest')?.scrollIntoView({ behavior: 'smooth' });
                    break;
            }
        });
    });

    // =====================================================================
    // STATS / DASHBOARD
    // =====================================================================
    function updateStats() {
        const listings = getListings();
        const totalTons = listings.reduce((sum, l) => sum + (parseFloat(l.quantity) || 0), 0);
        const est = totalTons * 520; // avg price per ton
        const co2 = totalTons * 500;
        const score = Math.min(100, Math.round(totalTons * 3));
        const carbonCredits = totalTons * 0.5 * 200; // credits value

        const scoreVal = document.getElementById('agroScoreVal');
        const wasteSold = document.getElementById('statWasteSold');
        const earned = document.getElementById('statTotalEarned');
        const co2El = document.getElementById('statCO2Saved');

        if (scoreVal) scoreVal.textContent = score;
        if (wasteSold) wasteSold.textContent = totalTons + ' ' + t('tons');
        if (earned) earned.textContent = '₹' + est.toLocaleString();
        if (co2El) co2El.textContent = co2.toLocaleString() + ' kg';

        // Update score ring
        const ringFill = document.querySelector('.ring-fill');
        if (ringFill) {
            const offset = 264 - (264 * score / 100);
            ringFill.setAttribute('stroke-dashoffset', offset);
        }

        // Monthly Earnings Summary
        const earnDirect = document.getElementById('earnDirectSales');
        const earnCarbon = document.getElementById('earnCarbonCredits');
        const earnTotal = document.getElementById('earnTotal');
        if (earnDirect) earnDirect.textContent = '₹' + est.toLocaleString();
        if (earnCarbon) earnCarbon.textContent = '₹' + carbonCredits.toLocaleString();
        if (earnTotal) earnTotal.textContent = '₹' + (est + carbonCredits).toLocaleString();

        // Village stats (simulated community)
        const vf = document.getElementById('villageFarmers');
        const vt = document.getElementById('villageTons');
        const ve = document.getElementById('villageEarnings');
        if (vf) vf.textContent = Math.max(1, listings.length * 12);
        if (vt) vt.textContent = Math.round(totalTons * 8);
        if (ve) ve.textContent = '₹' + Math.round(est * 8).toLocaleString();
    }

    // =====================================================================
    // CARBON CREDIT CALCULATOR
    // =====================================================================
    const carbonSlider = document.getElementById('carbonSlider');
    const sliderTonsVal = document.getElementById('sliderTonsVal');
    const calcCredits = document.getElementById('calcCredits');
    const calcMoney = document.getElementById('calcMoney');
    const calcCO2 = document.getElementById('calcCO2');

    if (carbonSlider) {
        carbonSlider.addEventListener('input', (e) => {
            const tons = parseInt(e.target.value);
            if (sliderTonsVal) sliderTonsVal.innerHTML = `${tons} <span data-i18n="tons">${t('tons')}</span>`;
            const credits = (tons * 0.5).toFixed(1);
            const money = (credits * 200).toLocaleString();
            const co2 = (tons * 500).toLocaleString();
            if (calcCredits) calcCredits.textContent = credits;
            if (calcMoney) calcMoney.textContent = `₹${money}`;
            if (calcCO2) calcCO2.textContent = `${co2} kg`;
        });
    }

    // =====================================================================
    // PRE-HARVEST PREDICTOR
    // =====================================================================
    const btnCalc = document.getElementById('btnCalculatePreHarvest');
    const predictResultBox = document.getElementById('predictResultBox');

    if (btnCalc) {
        btnCalc.addEventListener('click', () => {
            const qty = parseInt(document.getElementById('predictQuantity').value) || 100;
            const tons = Math.round(qty * 0.15);
            const totalPrice = tons * 520;
            const loc = userData ? userData.location : '';

            document.getElementById('resWasteTons').textContent = `${tons} ${t('tons')}`;
            document.getElementById('resBuyerName').textContent = `GreenBio Biogas (${loc})`;
            document.getElementById('resLockedPrice').textContent = `₹${totalPrice.toLocaleString()}`;

            if (predictResultBox) predictResultBox.style.display = 'block';
            showToast(`🔮 ${tons} ${t('tons')} ${t('estimatedWaste')} — ₹${totalPrice.toLocaleString()}`);
        });
    }

    // =====================================================================
    // HELP BUTTONS
    // =====================================================================
    const btnCallHelp = document.getElementById('btnCallHelp');
    const btnWhatsapp = document.getElementById('btnWhatsapp');
    const btnWatchVideo = document.getElementById('btnWatchVideo');

    if (btnCallHelp) btnCallHelp.addEventListener('click', () => {
        window.open('tel:18001234567', '_self');
    });
    if (btnWhatsapp) btnWhatsapp.addEventListener('click', () => {
        window.open('https://wa.me/919876543210?text=Hi%20AgroLoop%2C%20I%20need%20help', '_blank');
    });
    if (btnWatchVideo) btnWatchVideo.addEventListener('click', () => {
        showToast('🎬 Video guide coming soon!');
    });

    // =====================================================================
    // TOAST NOTIFICATIONS
    // =====================================================================
    const toastNotif = document.getElementById('toastNotif');
    const toastMsg = document.getElementById('toastMsg');

    function showToast(msg) {
        if (!toastMsg || !toastNotif) return;
        toastMsg.textContent = msg;
        toastNotif.classList.add('active');
        setTimeout(() => toastNotif.classList.remove('active'), 3200);
    }

    // =====================================================================
    // INIT
    // =====================================================================
    applyTranslations();
    checkLogin();
    renderListings();
    updateStats();
    updateActiveListingPreview();
    loadSavedRecords();
});
