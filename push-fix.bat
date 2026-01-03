@echo off
cd /d C:\Users\Krista\Desktop\baroque-dance-deploy
git add -A
git commit -m "Mobile-first redesign: proper layout order, capture with thumbnail counter, custom prompt input"
git push origin main
echo.
echo Done! Railway will auto-deploy in ~2 minutes.
echo.
echo Test on mobile at: https://baroque-dance-production.up.railway.app
pause
