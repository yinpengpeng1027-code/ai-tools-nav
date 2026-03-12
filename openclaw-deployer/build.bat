# 打包 OpenClaw 一键部署工具为 EXE

pip install pyinstaller

# 打包为单个 exe 文件，带图标
pyinstaller --onefile --windowed --icon=logo.ico --name="OpenClaw 一键部署" --add-data "README.md;." openclaw-deployer.py

# 输出位置：dist/OpenClaw 一键部署.exe
