# News

> Find here the **latest releases** of DataMa Solutions

### 2021-04-24:

* **General:**
    * **Ratio helper**: A new visualization helps you define the ratio you want to analyze, by comparing the different ratios in your metrics relation. You can also see the numerator of each ratio, which is particularly useful for funnel analysis to see where you're loosing customers. Available by clicking on the '÷' icon in Pivot / Impact and above 'Settings>Included steps' in compare [Learn More](general/menu/ratio_helper)
    * Improved header: Save/ Settings/ Download icon have been reshuffled so that it is more intuitive to use
    * Tableau extension: DataMa extension is now reactive to any interaction with worksheet source, and provides a capability to refresh the data manually
    * Improved Slack connector
    * Multiple bug fixes and UI improvements

* **Compare:**
    * **Slide style**: Added a 'Slide Title' above each chart, to better tell the compare story. Download as PPT will come soon
    * **Right click** is now available in shared waterfall: this gives the possibility to switch analyzed dimension and collapse steps when sharing widget outside of DataMa core app (e.g. Tableau or Data Studio)  


### 2021-03-24:

* **General:**
    * **Tableau extension - paid version**: Client version (for licensees) of the demo extension to quickly create, adjust and save your use case in Tableau with no limitation of time
    * Tableau extension UI improvement: Easily navigate between solutions, outputs and source worksheets
    * **Custom color**: you can decide of the look and feel of all your charts (Settings>Display)
    * Multiple bug fixes and UI improvements (incl. ability to switch Start & End)

* **Compare:**
    * **Translation**: French translation is available for all text & comments (Settings>Display)
    * Waterfall right click improvement: ability to filter/ exclude Combined_Dimension and Smart Dimension
    * Metric relation quick definition: the Metric relation modal now includes a 'Sum' option when metrics are additive, not multiplicative

* **Impact:**
    * Clarified wording on p-value and test side options

### 2021-02-19:

* **General:**
    * Added a **Big Query** connector in Beta. You can now pull data from BQ and edit the SQL query to do so in DataMa
    * Scheduled **HTML export** feature: avoid computation time when exporting DataMa as a URL
    * Multiple bug fixes and UI improvements   

* **Compare:**
    * **Right click on the waterfall** to dynamically change the dimension, skip steps, show more segments, filter on a specific segment etc.
    * **Split of Mix effect and Performance effect only when it makes sense**. In "Auto" mode, mix effect won't be shown if it's too small vs. the overall variation
    * "Negative drivers only" option in settings. Allows to always show negative variation first, and give highest interest to dimensions with large negative variations, even if the overall variation is positive
    * Detailed table is now showing details of variations only for the selected Step

* **Pivot:**
    * **Compare mode** in Pivot. Enable comparison between two segments of the traditional Pivot charts (Dimension Importance and Clustering)
    * **Mekko chart** representation for showing correlation between one dimension and another on a given metric

* **Journey**
    * **Sequence** logic enabling analysis of pairs of touch points instead of single touch point


### 2021-01-15:

* **General:**
    * Enhanced Google Analytics connector, including GA Segments and automatic refresh of extract in case of date change in Start & End definition
    * DataMa Tableau extension now has a demo mode, listed on the official [Tableau extension Gallery](https://extensiongallery.tableau.com/extensions/233?version=2020.3&per-page=50)
    * Ability to easily duplicate workbooks and see live source links on Home page
    * Ability to change chart colors in display settings
    * Simplified display of automated email report
    * Multiple bug fixes and UI improvements (including ability to see which DataMa Solution is available, given your Licence & Data Source)

* **Compare:**
    * Improvement of the dimension interest scoring

* **Pivot:**
    * Added smart comments to Pivot charts

* **Impact:**
    * Included confidence interval on Welch T test calculation

### 2020-12-06: New UI

* **General:**
    * Added **home page** as a welcome page allowing quick access to saved workbooks. You can also edit and lock a workbook on the home page. [Learn More](source/source.md).
    * DataMa Solution and Workbook name is now stored in the URL, which allows to bookmark your analysis to find it quickly when you're back
    * Added **DataMa solution tab in header**, allowing to switch quickly from one solution to another, while keeping current settings in the menu
    * **Improved filters** by adding the capability to filter or exclude for all dimensions. [Learn More](general/menu/filters.md)
    * General refacto of the architecture of the app, which results in **improved performance**
    * Overall improvement of the UI, cleaner and whiter, which results in **easier and more enjoyable usage**
    * Multiple bug fixes

* **Source: (beta)**
    * Released first version of DataMa Source, which allows to check the source of your workbook. [Learn More](source/source.md)

* **Compare:**
    * Widgets have been reorganized, to improve performance and make it easier/ shorter to read

* **Pivot:**
    * Interdependence tab is now interactive: by clicking on a cell, you update the interdependence detailed view below.

* **Journey:**
    * Added difference of sunburst tab, which represent the gap between two sunbursts in compare mode.


### 2020-10-07:

* **General:**
    * Multiple fixes for stability and performance improvements
    * Improvement of Google Analytics connector
    * Minor UI improvements

* **Compare:**
    * Waterfall is now zoomable when exported as widget in a public url
    * Improved speed of waterfall and moves chart rendering

### 2020-09-23: 2020 Back to school release

* **General:**
    * Google Analytics is now a possible source, that can be saved with live update of the time window, and without using gsheet anymore
    * Executive summary and chart comments have been moved in a "Comments" section below charts for easier access
    * "Get inspired" button in the list of saved version gives you access to pre-saved use cases
    * Dynamic widgets (e.g. 'Moves' in Compare or 'Detailed view' in Impact) are now sharable through webview
    * Overview chart enhanced with KPI selection to better define start and end, and be able to spot breaks in trends
    * Ctrl+S save shortcut
    * Minor bugs and UI fixes

* **Impact:**
    * Added bootstrap test, which allows higher precision in roll out decision for AB test readouts - see our blog for more info on research and development done by the DataMa team
    * Increased confidence range for selection: research shows that one could decrease the expected level of confidence (increase alpha) in order to kill AB test earlier
    * Improved detailed view chart: significant changes have now a "*" to be easier to spot

* **Journey:**
    * Improved performance for large files
    * First documentation created (at last!)
    * Reshaped the UI, so that it is easier to read
    * Attribution is now an option that one can deactivate in the settings
    * "Simple metrics" in detail section now allow to compare one touch point to another on simple metrics like frequency of appearance
    * "Flow" chart in detail section now has color on the links to be able to easily read if one flow is increasing or decreasing between start and end (in compare mode)
    * Some UI improvements (colors aligned with other DataMa solutions, sunburst legend display etc)

* **Compare:**
    * Detailed table gives the % variation of each step but also the impact on the given step with conditional formated bar chart, given the segment weight


### 2020-07-29: New documentation

* **General:**
    * New documentation is available - check https://datama-solutions.github.io/docs/
