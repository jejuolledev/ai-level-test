// 레벨 테스트 결과 공유 - 이미지로 공유 (크롬 호환)
async function shareLevelResult() {
    try {
        const element = document.querySelector('.result-card');
        if (!element) {
            alert('결과 화면을 찾을 수 없습니다.');
            return;
        }

        const shareBtn = document.getElementById('shareLevelResultBtn');
        const homeBtn = element.querySelector('.home-btn');
        const originalShareDisplay = shareBtn ? shareBtn.closest('.share-button-container').style.display : '';
        const originalHomeDisplay = homeBtn ? homeBtn.closest('.home-button-container').style.display : '';
        
        if (shareBtn) shareBtn.closest('.share-button-container').style.display = 'none';
        if (homeBtn) homeBtn.closest('.home-button-container').style.display = 'none';

        const urlOverlay = document.createElement('div');
        urlOverlay.style.cssText = `
            text-align: center;
            padding: 20px;
            margin-top: 20px;
            font-size: 1.1rem;
            color: #667eea;
            font-weight: 700;
            border-top: 2px solid #e2e8f0;
        `;
        urlOverlay.textContent = '🌐 moahub.co.kr';
        element.appendChild(urlOverlay);

        const canvas = await html2canvas(element, {
            scale: 2,
            backgroundColor: '#ffffff',
            logging: false,
            useCORS: true,
            allowTaint: true
        });

        urlOverlay.remove();
        if (shareBtn) shareBtn.closest('.share-button-container').style.display = originalShareDisplay;
        if (homeBtn) homeBtn.closest('.home-button-container').style.display = originalHomeDisplay;

        const imageUrl = canvas.toDataURL('image/png');
        
        // 1. Web Share API 파일 공유 시도 (모바일 사파리 등)
        try {
            const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
            const file = new File([blob], 'ai-level-result.png', { type: 'image/png' });

            if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: '나의 AI 레벨 테스트 결과',
                    text: 'moahub.co.kr',
                    files: [file]
                });
                return;
            }
        } catch (shareErr) {
            if (shareErr.name === 'AbortError') return;
            console.log('파일 공유 실패, 다른 방법 시도:', shareErr);
        }

        // 2. 이미지를 새 창에 열기 (크롬, 파이어폭스 등)
        try {
            const newWindow = window.open();
            if (newWindow) {
                newWindow.document.write(`
                    <html>
                    <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>AI 레벨 테스트 결과</title>
                        <style>
                            body { 
                                margin: 0; 
                                padding: 20px; 
                                background: #f0f0f0; 
                                text-align: center; 
                                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                            }
                            img { 
                                max-width: 100%; 
                                height: auto; 
                                box-shadow: 0 4px 20px rgba(0,0,0,0.2); 
                                border-radius: 10px;
                                cursor: pointer;
                            }
                            .info { 
                                margin: 20px auto; 
                                padding: 20px; 
                                background: white; 
                                border-radius: 12px; 
                                color: #333;
                                max-width: 600px;
                                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                            }
                            .info strong { 
                                color: #667eea;
                                font-size: 1.1em;
                            }
                            .info p {
                                margin: 10px 0;
                                line-height: 1.6;
                            }
                        </style>
                    </head>
                    <body>
                        <img src="${imageUrl}" alt="AI 레벨 테스트 결과" onclick="alert('이미지를 우클릭(PC) 또는 길게 눌러(모바일) 저장/공유할 수 있습니다.')">
                        <div class="info">
                            <p><strong>📱 모바일:</strong> 이미지를 길게 눌러 저장 또는 공유</p>
                            <p><strong>💻 PC:</strong> 이미지를 우클릭하여 '다른 이름으로 저장'</p>
                            <p style="margin-top: 20px; color: #667eea; font-weight: bold;">🌐 moahub.co.kr</p>
                        </div>
                    </body>
                    </html>
                `);
                newWindow.document.close();
                return;
            }
        } catch (popupErr) {
            console.log('새 창 열기 실패:', popupErr);
        }

        // 3. 텍스트로 폴백
        const levelEmoji = document.getElementById('resultEmoji').textContent;
        const levelName = document.getElementById('resultLevel').textContent;
        const summary = document.getElementById('resultSummary').textContent;
        const shareText = `${levelEmoji} 나의 AI 레벨은 "${levelName}"!\n\n${summary}\n\n나도 내 AI 레벨 테스트 해보기 👉 https://moahub.co.kr`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: '나의 AI 레벨 테스트 결과',
                    text: shareText
                });
            } catch (textShareErr) {
                if (textShareErr.name !== 'AbortError') {
                    await navigator.clipboard.writeText(shareText);
                    alert('텍스트가 클립보드에 복사되었습니다! 🎉');
                }
            }
        } else {
            await navigator.clipboard.writeText(shareText);
            alert('텍스트가 클립보드에 복사되었습니다! 🎉');
        }

    } catch (error) {
        console.error('이미지 생성 실패:', error);
        alert('이미지 생성에 실패했습니다. 다시 시도해주세요.');
    }
}

// 퀴즈 결과 공유 - 이미지로 공유 (크롬 호환)
async function shareQuizResult() {
    try {
        const element = document.querySelector('.quiz-result-card');
        if (!element) {
            alert('결과 화면을 찾을 수 없습니다.');
            return;
        }

        const reviewList = document.getElementById('quizReviewListInline');
        const wasReviewVisible = reviewList && !reviewList.classList.contains('hidden');
        if (wasReviewVisible) reviewList.classList.add('hidden');

        const shareBtn = document.getElementById('shareQuizResultBtn');
        const homeBtn = element.querySelector('.home-btn');
        const reviewBtn = document.getElementById('quizReviewBtn');
        
        const originalShareDisplay = shareBtn ? shareBtn.closest('.share-button-container-simple').style.display : '';
        const originalHomeDisplay = homeBtn ? homeBtn.closest('.home-button-container').style.display : '';
        const originalReviewDisplay = reviewBtn ? reviewBtn.closest('.result-buttons').style.display : '';
        
        if (shareBtn) shareBtn.closest('.share-button-container-simple').style.display = 'none';
        if (homeBtn) homeBtn.closest('.home-button-container').style.display = 'none';
        if (reviewBtn) reviewBtn.closest('.result-buttons').style.display = 'none';

        const urlOverlay = document.createElement('div');
        urlOverlay.style.cssText = `
            text-align: center;
            padding: 20px;
            margin-top: 20px;
            font-size: 1.1rem;
            color: #667eea;
            font-weight: 700;
            border-top: 2px solid #e2e8f0;
        `;
        urlOverlay.textContent = '🌐 moahub.co.kr';
        element.appendChild(urlOverlay);

        const canvas = await html2canvas(element, {
            scale: 2,
            backgroundColor: '#ffffff',
            logging: false,
            useCORS: true,
            allowTaint: true
        });

        urlOverlay.remove();
        if (shareBtn) shareBtn.closest('.share-button-container-simple').style.display = originalShareDisplay;
        if (homeBtn) homeBtn.closest('.home-button-container').style.display = originalHomeDisplay;
        if (reviewBtn) reviewBtn.closest('.result-buttons').style.display = originalReviewDisplay;
        if (wasReviewVisible && reviewList) reviewList.classList.remove('hidden');

        const imageUrl = canvas.toDataURL('image/png');
        
        // 1. Web Share API 파일 공유 시도 (모바일 사파리 등)
        try {
            const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
            const file = new File([blob], 'ai-quiz-result.png', { type: 'image/png' });

            if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: 'AI 덕후 퀴즈 결과',
                    text: 'moahub.co.kr',
                    files: [file]
                });
                return;
            }
        } catch (shareErr) {
            if (shareErr.name === 'AbortError') return;
            console.log('파일 공유 실패, 다른 방법 시도:', shareErr);
        }

        // 2. 이미지를 새 창에 열기 (크롬, 파이어폭스 등)
        try {
            const newWindow = window.open();
            if (newWindow) {
                newWindow.document.write(`
                    <html>
                    <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>AI 덕후 퀴즈 결과</title>
                        <style>
                            body { 
                                margin: 0; 
                                padding: 20px; 
                                background: #f0f0f0; 
                                text-align: center; 
                                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                            }
                            img { 
                                max-width: 100%; 
                                height: auto; 
                                box-shadow: 0 4px 20px rgba(0,0,0,0.2); 
                                border-radius: 10px;
                                cursor: pointer;
                            }
                            .info { 
                                margin: 20px auto; 
                                padding: 20px; 
                                background: white; 
                                border-radius: 12px; 
                                color: #333;
                                max-width: 600px;
                                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                            }
                            .info strong { 
                                color: #667eea;
                                font-size: 1.1em;
                            }
                            .info p {
                                margin: 10px 0;
                                line-height: 1.6;
                            }
                        </style>
                    </head>
                    <body>
                        <img src="${imageUrl}" alt="AI 덕후 퀴즈 결과" onclick="alert('이미지를 우클릭(PC) 또는 길게 눌러(모바일) 저장/공유할 수 있습니다.')">
                        <div class="info">
                            <p><strong>📱 모바일:</strong> 이미지를 길게 눌러 저장 또는 공유</p>
                            <p><strong>💻 PC:</strong> 이미지를 우클릭하여 '다른 이름으로 저장'</p>
                            <p style="margin-top: 20px; color: #667eea; font-weight: bold;">🌐 moahub.co.kr</p>
                        </div>
                    </body>
                    </html>
                `);
                newWindow.document.close();
                return;
            }
        } catch (popupErr) {
            console.log('새 창 열기 실패:', popupErr);
        }

        // 3. 텍스트로 폴백
        const emoji = document.getElementById('quizResultEmoji').textContent;
        const level = document.getElementById('quizResultLevel').textContent;
        const summary = document.getElementById('quizResultSummary').textContent;
        const score = document.getElementById('quizScore').textContent;
        const total = document.getElementById('quizTotal').textContent;
        const shareText = `${emoji} 나의 AI 덕후 레벨은 "${level}"!\n\n${summary}\n${score}/${total}점 달성!\n\n나도 AI 상식 퀴즈 도전하기 👉 https://moahub.co.kr`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'AI 덕후 퀴즈 결과',
                    text: shareText
                });
            } catch (textShareErr) {
                if (textShareErr.name !== 'AbortError') {
                    await navigator.clipboard.writeText(shareText);
                    alert('텍스트가 클립보드에 복사되었습니다! 🎉');
                }
            }
        } else {
            await navigator.clipboard.writeText(shareText);
            alert('텍스트가 클립보드에 복사되었습니다! 🎉');
        }

    } catch (error) {
        console.error('이미지 생성 실패:', error);
        alert('이미지 생성에 실패했습니다. 다시 시도해주세요.');
    }
}
