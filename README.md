# Tech-Challenge

# DeepFormer_Data_Analysis_Tool
Reading and writing .mhd files in pyqt.

Note:"MHD_read_write.py" is the fork of https://github.com/yanlend/mhd_utils

Extended functionality:
*  allows to write beamformed
*  allows to write non-beamformed
*  allows to label the beamformed and non-beamformed data
*  allows to visualize the beamformed and non-beamformed data

# Setup
git clone https://gitlab.lrz.de/ge56con/deepformer_data_analysis_tool.git

# Usage
*  cd DeepFormer_Data_Analysis_Tool/ python Tool.py
*  click "File" menu and choose "open" for beamformed-mhd and also non-beamformed file if it exists.
![image](images/open_mhd_file.jpg)

*  click "Add Class" and enter new name for the class.
![image](images/add_newclass.jpg)
*  click classes for labeling images.
![image](images/labels_image.jpg)
*  clish "Finish" and choose a directory for saving the labelled images.
![image](images/finish.jpg )



