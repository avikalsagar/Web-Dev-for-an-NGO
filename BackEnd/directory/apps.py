from django.apps import AppConfig
"""<!--<h1> {{% row.name %}} </h1>
<ol>
    <li> {{{% row.location %}} </li>
    <li> {{% row.description %}} </li>
    <li> {{% row.category %}} </li>
    <li> {{% row.donation_required %}} </li>
</ol> -->"""

class DirectoryConfig(AppConfig):
    name = 'directory'
